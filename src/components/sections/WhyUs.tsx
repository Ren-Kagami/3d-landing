import { FC } from "react"

const WhyUs: FC = () => (
  <section id="whyus" className="py-20 dark:bg-gray-900 max-w-5xl mx-auto px-6">
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
export default WhyUs;