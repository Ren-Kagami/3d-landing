'use client'
import Head from "next/head";
import { FC, useState, useEffect } from "react";

// --- CONFIG ---
const AppConfig = {
  site_name: "Хиханьки хаханьки",
  title: "3D printing farm landing page",
  description: "3D printing farm landing page with some info",
  author: "Ultro",
  social: {},
};

// --- NAVBAR ---
const Navbar: FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-purple-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-bold text-lg">3D Print Farm</span>
        <div className="space-x-6 hidden md:flex">
          <button onClick={() => handleScroll("about")} className="hover:text-purple-300">О нас</button>
          <button onClick={() => handleScroll("features")} className="hover:text-purple-300">Материалы</button>
          <button onClick={() => handleScroll("equipment")} className="hover:text-purple-300">Оборудование</button>
          <button onClick={() => handleScroll("whyus")} className="hover:text-purple-300">Почему мы</button>
          <button onClick={() => handleScroll("contacts")} className="hover:text-purple-300">Контакты</button>
        </div>
      </div>
    </nav>
  );
};

// --- HERO ---
const Hero: FC = () => (
  <section id="hero" className="text-center py-32 bg-purple-900 text-white">
    <h1 className="text-4xl md:text-3xl font-bold mb-4">
      Печатаем идеи в реальность — профессиональная 3D-печать на заказ
    </h1>
    <p className="text-lg text-purple-200 mb-6">
      Высокоточная печать из PETG, PLA, ABS и Carbon на современных FLSUN и
      FLASHFORGE.
    </p>
  </section>
);

// --- ABOUT ---
const About: FC = () => (
  <section id="about" className="text-center py-20 bg-gray-50 dark:bg-gray-900 dark:text-gray-200">
    <h1 className="text-4xl md:text-3xl font-bold mb-4 text-purple-900 dark:text-purple-400">О нас</h1>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
      Мы — команда энтузиастов и специалистов, объединённых общей идеей: сделать
      3D-печать доступной, быстрой и надёжной. Наша ферма 3D-принтеров оснащена
      современными устройствами FLSUN T1 Pro, FLSUN V400 и FLASHFORGE Adventurer
      3M, что позволяет реализовывать проекты разной сложности и масштаба.
    </p>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
      Мы работаем как с индивидуальными заказчиками, которым нужно напечатать
      уникальный предмет или подарок, так и с компаниями, для которых важна
      серийная печать, изготовление прототипов или создание мелких функциональных
      деталей.
    </p>
    <h5 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-400">Почему выбирают нас:</h5>
    <ul className="list-disc list-inside text-left max-w-2xl mx-auto space-y-2 text-gray-700 dark:text-gray-300">
      <li>Современные принтеры: FLSUN T1 Pro, FLSUN V400, FLASHFORGE Adventurer 3M.</li>
      <li>Поддержка популярных материалов: PETG, PLA, ABS, Carbon.</li>
      <li>Высокая скорость и точность печати.</li>
      <li>Индивидуальный подход и помощь на каждом этапе.</li>
    </ul>
  </section>
);

// --- FEATURES ---
const Features: FC = () => (
  <section id="features" className="py-20 max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-6 text-purple-900 dark:text-purple-400">Материалы для печати</h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
      Мы используем только проверенные материалы, чтобы ваши изделия сочетали
      прочность, эстетичность и долговечность.
    </p>
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-2 text-purple-800 dark:text-purple-300">PLA</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Экологичный биопластик. Отличается лёгкостью в печати, доступностью и
          безопасностью. Идеально подходит для макетов, учебных моделей и
          декоративных изделий.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-purple-800 dark:text-purple-300">PETG</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Материал, сочетающий в себе прочность и гибкость. Устойчив к влаге,
          ультрафиолету и химическим воздействиям. Рекомендуется для
          функциональных деталей и предметов, которые должны служить долго.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-purple-800 dark:text-purple-300">ABS</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Классика 3D-печати. Обладает высокой прочностью и термостойкостью.
          Идеален для изготовления корпусов, запчастей и изделий, которые будут
          подвергаться нагрузкам.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-purple-800 dark:text-purple-300">Carbon (углеродное волокно)</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Композитный материал с высокой жёсткостью и лёгким весом. Используется в
          инженерных проектах, где важна максимальная прочность при минимальном
          весе.
        </p>
      </div>
    </div>
  </section>
);

// --- EQUIPMENT ---
const Equipment: FC = () => (
  <section id="equipment" className="py-20 max-w-5xl mx-auto px-6 bg-purple-50 dark:bg-gray-800">
    <h2 className="text-3xl font-bold text-center mb-6 text-purple-900 dark:text-purple-400">Оборудование</h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
      Наш парк оборудования — это сочетание скорости, точности и универсальности.
    </p>
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-2 text-purple-800 dark:text-purple-300">FLSUN T1 Pro</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Новейший принтер с возможностью высокоскоростной печати без потери
          качества. Позволяет выполнять заказы быстрее, сохраняя при этом
          идеальную детализацию.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-purple-800 dark:text-purple-300">FLSUN V400</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Мощный принтер для печати изделий больших размеров. Отличается
          надёжностью и стабильностью, что особенно важно при создании
          крупногабаритных объектов.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-purple-800 dark:text-purple-300">FLASHFORGE Adventurer 3M</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Компактный, но точный принтер, который идеально подходит для печати
          небольших деталей, где важна каждая мелочь.
        </p>
      </div>
    </div>
    <p className="text-lg text-gray-600 dark:text-gray-300 text-center mt-12 max-w-3xl mx-auto">
      Такое сочетание оборудования даёт возможность нам одинаково хорошо
      справляться и с единичными заказами, и с серийным производством.
    </p>
  </section>
);

// --- WHY US ---
const WhyUs: FC = () => (
  <section id="whyus" className="py-20 bg-gray-100 dark:bg-gray-900 max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-6 text-purple-900 dark:text-purple-400">Почему выбирают нас</h2>
    <ul className="list-disc list-inside text-left max-w-3xl mx-auto space-y-4 text-gray-700 dark:text-gray-300">
      <li><strong className="text-purple-800 dark:text-purple-300">Опыт и экспертиза</strong> — мы знаем все тонкости работы с материалами и технологиями.</li>
      <li><strong className="text-purple-800 dark:text-purple-300">Гибкость</strong> — подбираем решение под задачу клиента, будь то прототип или готовое изделие.</li>
      <li><strong className="text-purple-800 dark:text-purple-300">Качество</strong> — на выходе вы получаете изделие, которое полностью соответствует чертежу и ожиданиям.</li>
      <li><strong className="text-purple-800 dark:text-purple-300">Скорость</strong> — современное оборудование позволяет выполнять заказы в кратчайшие сроки.</li>
      <li><strong className="text-purple-800 dark:text-purple-300">Поддержка</strong> — мы консультируем и помогаем подобрать оптимальные материалы и технологию печати.</li>
    </ul>
  </section>
);

// --- CONTACTS ---
const Contacts: FC = () => (
  <section id="contacts" className="py-20 max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-6 text-purple-900 dark:text-purple-400">Контакты</h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
      Хотите обсудить проект, узнать стоимость печати или получить консультацию?
      Мы всегда на связи:
    </p>
    <div className="space-y-4 text-gray-700 dark:text-gray-300">
      <p>📞 Телефон: +7 (985) 540-58-96</p>
      <p>✉️ Email: ggstudio.un@yandex.ru</p>
      <p>📍 Адрес: Арзамас, улица Луночарского 31</p>
    </div>
    <p className="text-lg text-gray-600 dark:text-gray-300 mt-8">
      Заполните форму обратной связи — и мы свяжемся с вами в ближайшее время,
      чтобы обсудить детали вашего заказа.
    </p>
  </section>
);


interface FormData {
  name: string;
  email: string;
  phone: string;
}

// --- CTA BANNER WITH CONTACT FORM AND ANTI-SPAM ---
const CTABanner: FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
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
      // Ensure we don't get negative numbers
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
    const TELEGRAM_BOT_TOKEN = '7569248220:AAGCbGfI3sFMUDZf45SyFpYbfYHraeiFeNA';
    const TELEGRAM_CHAT_ID = '1179555526';
    
    const message = `
🔔 Новая заявка с сайта!

👤 Имя: ${data.name}
📧 Email: ${data.email}
📱 Телефон: ${data.phone || 'Не указан'}
⏰ Дата: ${new Date().toLocaleString('ru-RU')}
    `.trim();

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      return true;
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      return;
    }

    // Anti-spam checks
    const currentTime = Date.now();
    
    // 1. Honeypot check (hidden field that bots fill out)
    if (honeypot.trim() !== '') {
      console.log('Honeypot triggered - spam detected');
      return;
    }
    
    // 2. Rate limiting (prevent multiple submissions)
    if (lastSubmissionTime && currentTime - lastSubmissionTime < 30000) { // 30 seconds
      setSubmitStatus('error');
      return;
    }
    
    // 3. Time-based check (form filled too quickly - likely bot)
    if (currentTime - formStartTime < 3000) { // 3 seconds minimum
      console.log('Form submitted too quickly - spam detected');
      setSubmitStatus('error');
      return;
    }
    
    // 4. Captcha validation
    if (parseInt(captcha.userAnswer) !== captcha.answer) {
      setSubmitStatus('error');
      return;
    }
    
    // 5. Simple content validation
    const suspiciousPatterns = [
      /https?:\/\/[^\s]+/gi, // URLs in name/phone
      /[^\w\s@.-]/gi, // Unusual characters (except for email)
    ];
    
    if (suspiciousPatterns.some(pattern => 
      pattern.test(formData.name) || 
      (formData.phone && pattern.test(formData.phone))
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
        setIsFormOpen(false);
        setSubmitStatus(null);
      }, 2000);
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const openForm = () => {
    setIsFormOpen(true);
    setFormStartTime(Date.now());
    generateCaptcha();
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setFormData({ name: '', email: '', phone: '' });
    setHoneypot('');
    setCaptcha({ question: '', answer: 0, userAnswer: '' });
    setSubmitStatus(null);
    setFormStartTime(0);
  };

  return (
    <section className="py-16 bg-purple-900 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Готовы начать печатать?</h2>
      
      <button
        onClick={openForm}
        className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-colors"
      >
        Оставить заявку
      </button>

      {/* Modal Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md text-gray-900">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-purple-900">Оставить заявку</h3>
              <button
                onClick={closeForm}
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
              {/* Honeypot field - hidden from users but visible to bots */}
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              {/* Simple Math Captcha */}
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Введите ответ"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeForm}
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
                  className="flex-1 px-4 py-2 bg-purple-900 text-white rounded-md hover:bg-purple-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};


// --- FOOTER ---
const Footer: FC = () => (
  <footer className="py-8 text-center bg-purple-900 text-purple-100">
    <p className="mb-2">&copy; {new Date().getFullYear()} {AppConfig.site_name}</p>
    <div className="flex justify-center space-x-4"></div>
  </footer>
);

// --- MAIN PAGE ---
const Home: FC = () => (
  <>
    <Head>
      <title>{AppConfig.title}</title>
      <meta name="description" content={AppConfig.description} />
      <meta name="author" content={AppConfig.author} />
    </Head>
    <Navbar />
    <div className="pt-20">
      <Hero />
      <About />
      <Features />
      <Equipment />
      <WhyUs />
      <Contacts />
      <CTABanner />
      <Footer />
    </div>
  </>
);

export default Home;
