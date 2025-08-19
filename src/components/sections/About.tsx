import { FC } from "react";

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

export default About;