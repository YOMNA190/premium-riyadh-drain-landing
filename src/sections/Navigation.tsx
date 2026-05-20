import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'لماذا نحن', href: '#why-us' },
  { label: 'النتائج', href: '#before-after' },
  { label: 'الأسئلة', href: '#faq' },
  { label: 'اتصل بنا', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-panel shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleClick('#hero'); }}
          className="flex items-center gap-2 text-yellow-brand font-bold text-lg lg:text-xl"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="#F5C518" fillOpacity="0.1" />
            <path d="M8 16h6M18 12h6M18 20h6M14 12v8" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="14" cy="16" r="2" stroke="#F5C518" strokeWidth="2" />
          </svg>
          <span className="hidden sm:inline">تسليك مجاري الرياض</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
              className="text-sm text-gray-300 hover:text-yellow-brand transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/966576807249"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm py-2 px-4"
          >
            واتساب
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass-panel border-t border-white/5">
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className="text-gray-300 hover:text-yellow-brand hover:bg-white/5 py-3 px-4 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/966576807249"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-3 px-4 mt-2 justify-center"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
