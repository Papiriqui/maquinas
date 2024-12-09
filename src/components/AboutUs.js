import React from 'react';
import aboutImg from '../assets/img/conver.jpg'; // Ajusta la ruta según tu proyecto

const AboutUs = () => {
  return (
    <section id="Nosotros" className="about-us">
      <h2>Sobre Nosotros</h2>
      
      <div className="about-top">
        <div className="about-text">
          <p>
            Somos una empresa dedicada al alquiler de equipos menores y maquinarias pesadas y equipos de construcción, 
            comprometida con ofrecer soluciones integrales a nuestros clientes. Con años de experiencia 
            en el sector, atención personalizada y mantenimiento 
            constante de nuestras máquinas para garantizar su óptimo desempeño en cada proyecto. Asimismo velamos por la seguridad, salud en el trabajo, y una constante capacitación a nuestros colaboradores.
          </p>
        </div>
        <div className="about-image-container">
          <img src={aboutImg} alt="Equipo de trabajo" className="about-image" />
        </div>
      </div>

      <div className="about-mision-vision">
        <div className="about-box">
          <h3>Misión</h3>
          <p>
            Suministrar equipos de construcción de alta calidad y brindar un servicio confiable,
            facilitando el desarrollo de obras eficientes y seguras para nuestros clientes.
          </p>
        </div>
        <div className="about-box">
          <h3>Visión</h3>
          <p>
            Convertirnos en la empresa líder en alquiler de maquinaria pesada a nivel nacional,
            reconocida por nuestra excelencia operativa y compromiso con la satisfacción del cliente.
          </p>
        </div>
        <div className="about-box">
          <h3>Valores</h3>
          <p>
            Confianza, Seriedad y garantía son los pilares que 
            guían todas nuestras acciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
