
import React from 'react';

const Header: React.FC = () => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-8 lg:px-24 py-6 flex justify-between items-center">
        <a 
          href="#inicio" 
          onClick={(e) => handleNav(e, 'inicio')}
          className="flex flex-col group cursor-pointer"
        >
          <span className="text-xl serif font-bold text-white group-hover:text-champagne transition-colors">LV Legal</span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-smoke">Firma de Abogados</span>
        </a>
        
        <nav className="hidden md:flex space-x-10 items-center">
          <a 
            href="#nosotros" 
            onClick={(e) => handleNav(e, 'nosotros')}
            className="text-smoke hover:text-white text-[9px] uppercase tracking-[0.3em] transition-all duration-300"
          >
            Nosotros
          </a>
          <a 
            href="#servicios" 
            onClick={(e) => handleNav(e, 'servicios')}
            className="text-smoke hover:text-white text-[9px] uppercase tracking-[0.3em] transition-all duration-300"
          >
            Áreas
          </a>
          <a 
            href="#agendar" 
            onClick={(e) => handleNav(e, 'agendar')}
            className="px-5 py-2 border border-champagne/30 text-champagne hover:bg-champagne hover:text-black text-[9px] uppercase tracking-[0.3em] transition-all duration-500"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
