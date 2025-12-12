'use client';
import { FC, useState } from "react";
import ContactForm from "../ui/ContactForm";

const Hero: FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="hero" className="text-center py-32 bg-[#659497] dark:bg-[#374a4d] text-white">
      <h1 className="text-4xl md:text-3xl font-bold mb-4">
        Печатаем идеи в реальность — профессиональная 3D-печать на заказ
      </h1>
      <p className="text-lg mb-8">
        Высокоточная печать из PETG, PLA, ABS и Carbon на современных FLSUN и
        FLASHFORGE.
      </p>
      
      <button
        onClick={() => setIsFormOpen(true)}
        className="bg-white text-[#117178] px-8 py-4 rounded-lg font-semibold hover:bg-[#46cbd4] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
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

export default Hero;