
import React from 'react';
import { METHODOLOGY } from '../constants';

const Methodology: React.FC = () => {
  return (
    <section className="relative py-40 bg-[#020617] overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/95 to-[#020617]"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-white/5 pb-16">
          <div className="max-w-xl">
            <p className="text-champagne text-[10px] uppercase letter-spacing-extreme font-bold mb-6">Metodología</p>
            <h2 className="text-5xl font-serif text-white">Nuestro enfoque <span className="italic text-smoke">de trabajo</span></h2>
          </div>
          <div className="max-w-xs mt-8 md:mt-0">
            <p className="text-smoke text-sm font-light leading-relaxed mb-4">
              Cada caso es distinto y requiere un análisis específico. 
            </p>
            <p className="text-white/60 text-xs italic">
              Buscamos que cada cliente tenga claridad sobre su situación legal y el camino a seguir.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 backdrop-blur-sm">
          {METHODOLOGY.map((step, index) => (
            <div key={index} className="group flex flex-col items-start p-10 bg-[#020617]/90 hover:bg-white/[0.03] transition-all duration-700 h-full">
              <span className="text-[10px] text-champagne/40 font-bold mb-6 block tracking-widest">PASO 0{index + 1}</span>
              <h3 className="text-xl font-serif text-white mb-4 group-hover:translate-x-1 transition-transform duration-500">
                {step.title}
              </h3>
              <p className="text-smoke text-xs leading-[1.8] font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
