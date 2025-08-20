import { FC } from "react";

const About: FC = () => (
  <section id="about" className="text-center py-20 dark:text-gray-200 max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-3xl font-bold mb-4 text-[#324b4d]">О нас</h1>
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
  </section>
);

export default About;