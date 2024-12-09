import React from 'react';
import retroImg from '../assets/img/retro.jpg';
import vibroImg from '../assets/img/vibropisonador.jpg';
import planchaImg from '../assets/img/plancha.jpg';
import pitbullImg from '../assets/img/pitbull.jpg';
import generadorImg from '../assets/img/generadorImg.jpg';
import rodillo from '../assets/img/rodillo.jpg';
import martillo from '../assets/img/martillo.jpg';
import Minicargador from '../assets/img/minica.jpg';




const Machinery = () => {
  return (
    <section id="Producto" className="machinery">
      <h2>Maquinaria Destacada</h2>
      <div className="machinery-grid">

      <div className="machinery-item">
          <img src={vibroImg} alt="Vibrocompactador" className="machinery-image"/>
          <h4 className="machinery-title">Vibroapisonador</h4>
          <p className="machinery-description">Asegura una compactación de alta calidad en terrenos sueltos.</p>
          <div className="machinery-price-container">
            <span className="machinery-price">S/100 / día</span>
          </div>
          <button className="machinery-button">Alquilar Ahora</button>
        </div>

        <div className="machinery-item">
          <img src={planchaImg} alt="Compactador" className="machinery-image"/>
          <h4 className="machinery-title">Plancha Compactadora</h4>
          <p className="machinery-description">Para una compactación uniforme de suelos.</p>
          <div className="machinery-price-container">
            <span className="machinery-price">S/110 / día</span>
          </div>
          <button className="machinery-button">Alquilar Ahora</button>
        </div>

        <div className="machinery-item">
          <img src={pitbullImg} alt="Retroexcavadora" className="machinery-image"/>
          <h4 className="machinery-title">Cortadora de Concreto</h4>
          <p className="machinery-description">Ideal para cortar pisos y concreto.</p>
          <div className="machinery-price-container">
            <span className="machinery-price">S/150 / día</span>
          </div>
          <button className="machinery-button">Alquilar Ahora</button>
        </div>

        <div className="machinery-item">
          <img src={generadorImg} alt="Retroexcavadora" className="machinery-image"/>
          <h4 className="machinery-title">Generador Eléctrico</h4>
          <p className="machinery-description">Ideal para el uso de máquinas y herramientas en lugares donde no hay energía.</p>
          <div className="machinery-price-container">
            <span className="machinery-price">S/100 / día</span>
          </div>
          <button className="machinery-button">Alquilar Ahora</button>
        </div>

        <div className="machinery-item">
          <img src={rodillo} alt="Retroexcavadora" className="machinery-image"/>
          <h4 className="machinery-title">Rodillo Chupetero Compactador</h4>
          <p className="machinery-description">Ideal para compactar terrenos.</p>
          <div className="machinery-price-container">
            <span className="machinery-price">S/350 / día</span>
          </div>
          <button className="machinery-button">Alquilar Ahora</button>
        </div>
        <div className="machinery-item">
          <img src={martillo} alt="Retroexcavadora" className="machinery-image"/>
          <h4 className="machinery-title">Martillo demoledor</h4>
          <p className="machinery-description">Ideal para demoler concreto.</p>
          <div className="machinery-price-container">
            <span className="machinery-price">S/250 / día</span>
          </div>
          <button className="machinery-button">Alquilar Ahora</button>
        </div>

        <div className="machinery-item">
          <img src={retroImg} alt="Retroexcavadora" className="machinery-image"/>
          <h4 className="machinery-title">Retroexcavadora</h4>
          <p className="machinery-description">Ideal para realizar trabajos de movimiento de tierra y excavaciones.</p>
          <div className="machinery-price-container">
            <span className="machinery-price">S/130 / hora</span>
          </div>
          <button className="machinery-button">Alquilar Ahora</button>
        </div>
        <div className="machinery-item">
          <img src={Minicargador} alt="Retroexcavadora" className="machinery-image"/>
          <h4 className="machinery-title">Minicargador</h4>
          <p className="machinery-description">Ideal para realizar carguillos y movimiento de tierra.</p>
          <div className="machinery-price-container">
            <span className="machinery-price">S/110 / hora</span>
          </div>
          <button className="machinery-button">Alquilar Ahora</button>
        </div>

      </div>
    </section>
  );
};

export default Machinery;
