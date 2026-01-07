
import React from 'react';

const Hero: React.FC = () => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center bg-[#020617] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://i.imgur.com/07kdqxi.jpeg" 
          alt="Oficina Legal" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 dark-gradient"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-24 relative z-10 reveal pt-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl text-white leading-tight mb-8 law-title font-semibold tracking-wide">
            Respaldo Legal <br />
            <span className="text-smoke">Sólido y Estratégico</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
                <p className="text-smoke text-base font-light leading-relaxed">
                En <strong>LV Legal</strong> brindamos servicios legales a personas y empresas que necesitan respaldo jurídico confiable para la toma de decisiones y la resolución de conflictos legales.
                </p>
                <p className="text-smoke text-base font-light leading-relaxed">
                Nuestro enfoque se basa en el análisis responsable de cada caso y en la correcta aplicación del marco legal vigente.
                </p>
            </div>
            <div className="flex md:justify-end items-center h-full">
              <a 
                href="#agendar" 
                onClick={(e) => handleNav(e, 'agendar')}
                className="py-4 px-10 border border-champagne text-white text-[10px] uppercase letter-spacing-extreme font-bold hover:bg-champagne hover:text-black transition-all duration-700 backdrop-blur-sm cursor-pointer"
              >
                Consultar Caso
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
