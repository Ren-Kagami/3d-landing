'use client';
import { FC, useState } from "react";
import ContactForm from "../ui/ContactForm";

const CTABanner: FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-16 bg-purple-900 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Готовы начать печатать?</h2>
      
      <button
        onClick={() => setIsFormOpen(true)}
        className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-colors"
      >
        Оставить заявку
      </button>

      <ContactForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  );
};

export default CTABanner;