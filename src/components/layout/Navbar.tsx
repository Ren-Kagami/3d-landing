'use client';
import { FC, useState, useEffect } from "react";

const Navbar: FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-purple-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-bold text-lg">3D Print Farm</span>
        <div className="space-x-6 hidden md:flex">
          <button onClick={() => handleScroll("about")} className="hover:text-purple-300">О нас</button>
          <button onClick={() => handleScroll("features")} className="hover:text-purple-300">Материалы</button>
          <button onClick={() => handleScroll("equipment")} className="hover:text-purple-300">Оборудование</button>
          <button onClick={() => handleScroll("whyus")} className="hover:text-purple-300">Почему мы</button>
          <button onClick={() => handleScroll("contacts")} className="hover:text-purple-300">Контакты</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;