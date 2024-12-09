import React from 'react';

const Services = () => {
  return (
    <section id="servicios" className="services">
      <h2>Nuestros Servicios</h2>
      <div className="service-grid">
        <div className="service-item">
          <h3>Alquiler de Equipos Menores y Maquinarias Pesadas</h3>
          <p>Equipos de alta calidad y mantenidos para garantizar su eficiencia.</p>
        </div>

        <div className="service-item">
          <h3>Mantenimiento</h3>
          <p>Realizamos mantenimientos y reparaciones de los equipos menores de construcción.</p>
        </div>
        <div className="service-item">
          <h3>Asesoría Técnica y Servicio Integral</h3>
          <p>Nuestro equipo te orienta para escoger la máquina adecuada a tu proyecto. Alquilamos equipos menores con o sin operador y realizamos transporte a obras (Costo adicional).</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
