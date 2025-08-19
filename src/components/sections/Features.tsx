import { FC } from "react";

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

export default Features;