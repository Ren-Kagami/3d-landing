'use client';
import { FC, useState, useEffect } from "react";
import { FormData } from "../../types";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  // Anti-spam states
  const [honeypot, setHoneypot] = useState('');
  const [captcha, setCaptcha] = useState({ question: '', answer: 0, userAnswer: '' });
  const [formStartTime, setFormStartTime] = useState<number>(0);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);

  // Generate simple math captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let answer: number;
    let question: string;
    
    if (operation === '+') {
      answer = num1 + num2;
      question = `${num1} + ${num2} = ?`;
    } else {
      const larger = Math.max(num1, num2);
      const smaller = Math.min(num1, num2);
      answer = larger - smaller;
      question = `${larger} - ${smaller} = ?`;
    }
    
    setCaptcha({ question, answer, userAnswer: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const sendToTelegram = async (data: FormData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Request failed");

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error("Error sending to backend:", error);
    return false;
  }
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      return;
    }

    const currentTime = Date.now();
    
    // Anti-spam checks
    if (honeypot.trim() !== '') {
      console.log('Honeypot triggered - spam detected');
      return;
    }
    
    if (lastSubmissionTime && currentTime - lastSubmissionTime < 30000) {
      setSubmitStatus('error');
      return;
    }
    
    if (currentTime - formStartTime < 3000) {
      console.log('Form submitted too quickly - spam detected');
      setSubmitStatus('error');
      return;
    }
    
    if (parseInt(captcha.userAnswer) !== captcha.answer) {
      setSubmitStatus('error');
      return;
    }
    
    const suspiciousPatterns = [
      /https?:\/\/[^\s]/gi,
    ];
    
    if (suspiciousPatterns.some(pattern => 
      pattern.test(formData.name)
    )) {
      console.log('Suspicious content detected');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const success = await sendToTelegram(formData);
    
    if (success) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '' });
      setLastSubmissionTime(currentTime);
      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
      }, 2000);
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '' });
    setHoneypot('');
    setCaptcha({ question: '', answer: 0, userAnswer: '' });
    setSubmitStatus(null);
    setFormStartTime(Date.now());
    generateCaptcha();
  };

  // Initialize form when opened
  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#659497] bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md text-gray-900">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-[#324b4d]">Оставить заявку</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            Произошла ошибка или неверно заполнена капча. Попробуйте еще раз.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ 
              position: 'absolute', 
              left: '-9999px', 
              visibility: 'hidden',
              opacity: 0 
            }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Имя *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              maxLength={50}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#befcff] focus:border-transparent"
              placeholder="Ваше имя"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              maxLength={100}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#befcff] focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              maxLength={20}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#befcff] focus:border-transparent"
              placeholder="7 (999) 123-45-67 (без спецсимволов)"
            />
          </div>

          <div>
            <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 mb-1">
              Проверка: {captcha.question} *
            </label>
            <input
              type="number"
              id="captcha"
              value={captcha.userAnswer}
              onChange={(e) => setCaptcha(prev => ({ ...prev, userAnswer: e.target.value }))}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#befcff] focus:border-transparent"
              placeholder="Введите ответ"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              disabled={isSubmitting}
            >
              Отмена
            </button>
            <button
              type="submit"
              disabled={
                isSubmitting || 
                !formData.name.trim() || 
                !formData.email.trim() || 
                !captcha.userAnswer.trim()
              }
              className="flex-1 px-4 py-2 bg-[#659497] text-white rounded-md hover:bg-[#4a7c80] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;