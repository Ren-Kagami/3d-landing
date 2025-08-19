import { FC } from "react";

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

export default Hero;