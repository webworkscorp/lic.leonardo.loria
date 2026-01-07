
import React from 'react';

const Footer: React.FC = () => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contacto" className="bg-black pt-24 pb-12 text-white border-t border-white/5">
      <div className="container mx-auto px-8 lg:px-24">
        <div className="grid md:grid-cols-3 gap-12 mb-24 items-start">
          <div>
            <p className="text-champagne text-[10px] uppercase tracking-widest font-bold mb-6">Contacto</p>
            <div className="space-y-4">
              <a href="mailto:consultas@lvlegal.com" className="text-lg font-light hover:text-champagne transition-colors serif italic block">
                consultas@lvlegal.com
              </a>
              <p className="text-smoke text-[11px] tracking-widest uppercase">+506 7116 0601</p>
            </div>
          </div>
          
          <div>
            <p className="text-champagne text-[10px] uppercase tracking-widest font-bold mb-6">Ubicación</p>
            <address className="not-italic text-white font-light text-sm tracking-widest uppercase leading-loose">
              San José, Costa Rica<br />
              Atención presencial con cita previa
            </address>
          </div>

          <div>
            <p className="text-champagne text-[10px] uppercase tracking-widest font-bold mb-6">Horario</p>
            <div className="text-smoke text-[11px] uppercase tracking-widest leading-loose">
              <p>Lunes a Viernes</p>
              <p className="text-white">8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[9px] uppercase tracking-widest text-white/30">
          <p>© 2026 LV Legal · Firma de Abogados</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a 
              href="#inicio" 
              onClick={(e) => handleNav(e, 'inicio')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Inicio
            </a>
            <span className="cursor-default">Costa Rica</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
