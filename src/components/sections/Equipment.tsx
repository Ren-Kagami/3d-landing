import { FC } from "react"

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

export default Equipment;