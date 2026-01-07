
import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "50671160601";
    const text = `Hola, mi nombre es ${nombre}. Deseo contactar al Lic. Leonardo Loria. Detalles de mi consulta: ${mensaje}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="agendar" className="py-32 bg-[#020617] border-t border-white/5">
      <div className="container mx-auto px-8 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl serif text-white mb-8">Agendar <span className="italic text-smoke">Consulta</span></h2>
            
            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-px h-10 bg-gradient-to-b from-transparent via-champagne to-transparent opacity-60"></div>
                <p className="text-smoke/60 text-[10px] uppercase letter-spacing-extreme font-light">
                    Atención profesional a cargo del
                </p>
                <p className="text-2xl text-white serif tracking-wide">
                    Lic. Leonardo Loria
                </p>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 backdrop-blur-sm">
            <form className="space-y-8" onSubmit={handleWhatsApp}>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-champagne font-bold">Nombre</label>
                <input 
                  type="text" 
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors font-light"
                  placeholder="Su nombre completo"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-champagne font-bold">Mensaje (detalles de su consulta)</label>
                <textarea 
                  required
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors font-light resize-none"
                  placeholder="Describa brevemente el trámite o consulta que requiere..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full py-4 bg-white text-black text-[10px] uppercase letter-spacing-extreme font-bold hover:bg-champagne transition-all duration-500"
                >
                  Contactar al Licenciado
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
