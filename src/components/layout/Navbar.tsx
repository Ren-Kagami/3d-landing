'use client';
import { FC, useState, useEffect, useRef } from "react";

const navItems = [
  { id: "about", label: "О нас" },
  { id: "features", label: "Материалы" },
  { id: "equipment", label: "Оборудование" },
  { id: "whyus", label: "Почему мы" },
  { id: "contacts", label: "Контакты" },
];

const Navbar: FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(navItems[0].id);
  const [bubble, setBubble] = useState<{
    width: number;
    height: number;
    left: number;
    top: number;
  } | null>(null);
  const desktopMenuRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

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

  // Detect active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is in upper portion of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the entry with the highest intersection ratio that's intersecting
      const intersectingEntries = entries.filter(entry => entry.isIntersecting);
      if (intersectingEntries.length === 0) return;

      // Sort by position (top to bottom) and get the first one
      const sortedEntries = intersectingEntries.sort(
        (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
      );
      
      const topEntry = sortedEntries[0];
      const sectionId = topEntry.target.id;
      
      if (sectionId && navItems.some(item => item.id === sectionId)) {
        setActiveId(sectionId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Also handle scroll to top (show first section)
    const handleScrollTop = () => {
      if (window.scrollY < 100) {
        setActiveId(navItems[0].id);
      }
    };
    window.addEventListener('scroll', handleScrollTop);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollTop);
    };
  }, []);

  const moveBubble = (id: string) => {
    const parent = desktopMenuRef.current;
    const el = itemRefs.current[id];
    if (!parent || !el) return;
    const rect = el.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    const padX = 12;
    const padY = 8;
    setBubble({
      width: rect.width + padX * 2,
      height: rect.height + padY * 2,
      left: rect.left - parentRect.left - padX,
      top: rect.top - parentRect.top - padY,
    });
  };

  useEffect(() => {
    moveBubble(activeId);
    const onResize = () => moveBubble(activeId);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeId]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setActiveId(id);
    moveBubble(id);
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
        <span className="font-bold text-lg text-black drop-shadow-sm dark:text-gray-200">
          3D Print Farm
        </span>

        {/* Desktop Menu */}
        <div
          className="space-x-4 hidden md:flex relative isolate"
          ref={desktopMenuRef}
        >
          {bubble && (
            <span
              className="absolute rounded-full bg-white/35 backdrop-blur-xl border border-white/40 shadow-[0_12px_36px_rgba(17,113,120,0.25)] transition-all duration-250"
              style={{
                width: bubble.width,
                height: bubble.height,
                left: bubble.left,
                top: bubble.top,
                opacity: 1,
              }}
            />
          )}
          {navItems.map((item) => (
            <button
              key={item.id}
              ref={(el) => {
                itemRefs.current[item.id] = el;
              }}
              onClick={() => handleScroll(item.id)}
              onMouseEnter={() => moveBubble(item.id)}
              onMouseLeave={() => moveBubble(activeId)}
              className="relative z-10 dark:text-gray-200 text-black/80 px-3 py-2 rounded-lg transition-all duration-200 hover:text-black"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="
          md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5
          text-black   /* Light theme */
          dark:text-white  /* Dark theme */
          rounded-lg transition-colors
          "
          aria-label="Toggle mobile menu"
        >
          <div className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
            mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`} />
          <div className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-0' : ''
          }`} />
          <div className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
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
              className="dark:text-gray-200 block w-full text-left text-black/80 hover:text-black hover:bg-gray-200/20 px-3 py-3 rounded-lg transition-all duration-200"
            >
              О нас
            </button>
            <button
              onClick={() => handleScroll("features")}
              className="dark:text-gray-200 block w-full text-left text-black/80 hover:text-black hover:bg-gray-200/20 px-3 py-3 rounded-lg transition-all duration-200"
            >
              Материалы
            </button>
            <button
              onClick={() => handleScroll("equipment")}
              className="dark:text-gray-200 block w-full text-left text-black/80 hover:text-black hover:bg-gray-200/20 px-3 py-3 rounded-lg transition-all duration-200"
            >
              Оборудование
            </button>
            <button
              onClick={() => handleScroll("whyus")}
              className="dark:text-gray-200 block w-full text-left text-black/80 hover:text-black hover:bg-gray-200/20 px-3 py-3 rounded-lg transition-all duration-200"
            >
              Почему мы
            </button>
            <button
              onClick={() => handleScroll("contacts")}
              className="dark:text-gray-200 block w-full text-left text-black/80 hover:text-black hover:bg-gray-200/20 px-3 py-3 rounded-lg transition-all duration-200"
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