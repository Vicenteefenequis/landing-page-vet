import React, { useState, useEffect } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import { CRMV, DOCTOR_NAME, NAV_LINKS, WHATSAPP_LINK } from '../constants';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-primary-50 text-primary-800' : 'bg-white/10 text-primary-900 backdrop-blur-sm'}`}>
              <Stethoscope size={24} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-serif font-bold text-lg md:text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                {DOCTOR_NAME}
              </span>
              <span className={`text-[11px] font-semibold uppercase tracking-[0.08em] ${isScrolled ? 'text-slate-600' : 'text-slate-800/80'}`}>
                {CRMV}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button 
              asLink 
              href={WHATSAPP_LINK} 
              external 
              variant="primary" 
              className="!py-2 !px-4 !text-sm"
            >
              Agende um horário
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-primary-800"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-base font-medium text-slate-700 py-2 border-b border-gray-50 hover:text-primary-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button 
            asLink 
            href={WHATSAPP_LINK} 
            external 
            variant="primary"
            fullWidth
            className="mt-2"
          >
            Falar no WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
};
