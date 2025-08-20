import { FC } from "react"

const Contacts: FC = () => (
  <section id="contacts" className="py-20 max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-6 text-[#324b4d]">Контакты</h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
      Хотите обсудить проект, узнать стоимость печати или получить консультацию?
      Мы всегда на связи:
    </p>
    <div className="space-y-4 text-gray-700 dark:text-gray-300">
      <p>📞 Телефон: +7 (910) 006-16-71</p>
      <p>✉️ Email: vidiarz@mail.ru</p>
      <p>📍 Адрес: Нижегородская область, город Арзамас, улица Луначарского 31</p>
    </div>
  </section>
);

export default Contacts;