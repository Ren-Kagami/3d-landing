'use client';
import { FC, useState, useEffect } from "react";

const Navbar: FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-gray-200/20 backdrop-blur-md border-b border-gray-300/30'
        : 'bg-gray-100/15 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-bold text-lg text-black drop-shadow-sm">
          3D Print Farm
        </span>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <button
            onClick={() => handleScroll("about")}
            className="text-black/80 hover:text-black hover:bg-gray-200/20 px-3 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm"
          >
            О нас
          </button>
          <button
            onClick={() => handleScroll("features")}
            className="text-black/80 hover:text-black hover:bg-gray-200/20 px-3 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm"
          >
            Материалы
          </button>
          <button
            onClick={() => handleScroll("equipment")}
            className="text-black/80 hover:text-black hover:bg-gray-200/20 px-3 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm"
          >
            Оборудование
          </button>
          <button
            onClick={() => handleScroll("whyus")}
            className="text-black/80 hover:text-black hover:bg-gray-200/20 px-3 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm"
          >
            Почему мы
          </button>
          <button
            onClick={() => handleScroll("contacts")}
            className="text-black/80 hover:text-black hover:bg-gray-200/20 px-3 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm"
          >
            Контакты
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
          aria-label="Toggle mobile menu"
        >
          <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${
            mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`} />
          <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-0' : ''
          }`} />
          <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${
            mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-gray-200/30 backdrop-blur-md border-t border-gray-300/30">
          <div className="px-6 py-2 space-y-1">
            <button
              onClick={() => handleScroll("about")}
              className="block w-full text-left text-black/80 hover:text-black hover:bg-gray-200/20 px-3 py-3 rounded-lg transition-all duration-200"
            >
              О нас
            </button>
            <button
              onClick={() => handleScroll("features")}
              className="block w-full text-left text-black/80 hover:text-black hover:bg-gray-200/20 px-3 py-3 rounded-lg transition-all duration-200"
            >
              Материалы
            </button>
            <button
              onClick={() => handleScroll("equipment")}
              className="block w-full text-left text-black/80 hover:text-black hover:bg-gray-200/20 px-3 py-3 rounded-lg transition-all duration-200"
            >
              Оборудование
            </button>
            <button
              onClick={() => handleScroll("whyus")}
              className="block w-full text-left text-black/80 hover:text-black hover:bg-gray-200/20 px-3 py-3 rounded-lg transition-all duration-200"
            >
              Почему мы
            </button>
            <button
              onClick={() => handleScroll("contacts")}
              className="block w-full text-left text-black/80 hover:text-black hover:bg-gray-200/20 px-3 py-3 rounded-lg transition-all duration-200"
            >
              Контакты
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;