
import React from 'react';
import { VALUE_PILLARS } from '../constants';

const Values: React.FC = () => {
  return (
    <section id="nosotros" className="py-32 bg-[#020617] border-y border-white/5">
      <div className="container mx-auto px-8 lg:px-24">
        <div className="max-w-3xl mb-16">
            <p className="text-champagne text-[10px] uppercase letter-spacing-extreme font-bold mb-6">Importancia</p>
            <h2 className="text-4xl serif text-white mb-6">¿Por qué contar con asesoría legal desde el inicio?</h2>
            <p className="text-smoke text-sm font-light leading-relaxed">
            Muchas situaciones legales pueden prevenirse o resolverse de mejor forma cuando se actúa a tiempo y con el acompañamiento adecuado. En LV Legal, acompañamos a nuestros clientes desde la orientación inicial hasta el desarrollo del proceso.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {VALUE_PILLARS.map((pillar, index) => (
            <div key={index} className="group flex flex-col items-start">
              <div className="mb-8 p-4 rounded-full border border-champagne/10 bg-white/5 group-hover:border-champagne/40 transition-all duration-700">
                {pillar.icon}
              </div>
              <h3 className="text-sm text-white font-bold mb-4 group-hover:text-champagne transition-colors">
                {pillar.title}
              </h3>
              <p className="text-smoke text-xs leading-[1.8] font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
