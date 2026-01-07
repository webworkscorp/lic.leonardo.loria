
import React from 'react';

const Profile: React.FC = () => {
  return (
    <section className="py-32 bg-[#020617]">
      <div className="container mx-auto px-8 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden grayscale opacity-90 border border-white/5">
              <img 
                src="https://i.imgur.com/wIeF9jG.jpeg" 
                alt="Asesoría Legal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="text-4xl serif text-white mb-8">
              ¿Cuándo <span className="italic text-champagne">contactarnos?</span>
            </h2>
            <p className="text-white font-light mb-8">
              Una consulta oportuna puede marcar la diferencia en el desarrollo de su situación legal. Puede comunicarse con nosotros si:
            </p>
            
            <ul className="space-y-6 text-smoke font-light text-sm leading-relaxed mb-8">
              <li className="flex gap-4">
                <span className="text-champagne">—</span>
                Necesita orientación legal antes de iniciar un trámite.
              </li>
              <li className="flex gap-4">
                <span className="text-champagne">—</span>
                Enfrenta un proceso judicial o administrativo.
              </li>
              <li className="flex gap-4">
                <span className="text-champagne">—</span>
                Requiere formalizar un acto legal o notarial.
              </li>
              <li className="flex gap-4">
                <span className="text-champagne">—</span>
                Tiene dudas sobre sus derechos u obligaciones legales.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
