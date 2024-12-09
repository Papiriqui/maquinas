import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Machinery from './components/Machinery';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs'; // Importar el nuevo componente

import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs /> {/* Colocamos la nueva sección aquí */}
      <Services />
      <Machinery />
      <Contact />
      <Footer />
      <FloatingContact />
    </>
  );
}

export default App;
