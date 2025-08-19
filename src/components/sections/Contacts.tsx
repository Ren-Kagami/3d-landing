import { FC } from "react"

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

export default Contacts;