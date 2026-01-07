
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Values from './components/Values';
import Methodology from './components/Methodology';
import Services from './components/Services';
import Booking from './components/Booking';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Header />
      <main>
        <Hero />
        <Values />
        <Methodology />
        <Services />
        <Profile /> {/* Ahora contiene "¿Cuándo contactarnos?" */}
        
        <div 
          className="relative bg-fixed bg-center bg-cover"
          style={{ 
            backgroundImage: "linear-gradient(rgba(2, 6, 23, 0.95), rgba(2, 6, 23, 0.95)), url('https://i.imgur.com/07kdqxi.jpeg')" 
          }}
        >
          <Booking />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
