
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-32 text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-8 lg:px-24">
        <div className="mb-24">
            <p className="text-champagne uppercase text-[10px] letter-spacing-extreme font-bold mb-4">Servicios Legales</p>
            <h2 className="text-5xl serif font-light mb-8">Áreas de <span className="italic text-smoke">Práctica</span></h2>
            <p className="text-smoke text-sm font-light max-w-2xl">
              En LV Legal – Firma de Abogados ofrecemos servicios legales integrales, enfocados en la resolución efectiva de sus necesidades jurídicas.
            </p>
        </div>

        <div className="space-y-1">
          {SERVICES.map((service, index) => (
            <div key={index} className="group py-12 border-b border-white/5 grid md:grid-cols-12 gap-8 items-start hover:bg-white/[0.02] transition-all duration-700 px-4 md:px-6">
              <div className="md:col-span-1 pt-1">
                <span className="text-champagne/30 text-xs serif italic">0{index + 1}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl serif text-white group-hover:text-champagne transition-colors duration-500 mb-2">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-smoke text-sm font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="md:col-span-2 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-700 pt-2 md:pt-0">
                <a 
                  href="#agendar" 
                  onClick={(e) => handleNav(e, 'agendar')}
                  className="text-[9px] uppercase letter-spacing-extreme text-white/40 hover:text-champagne transition-colors duration-300 cursor-pointer"
                >
                  Consultar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
