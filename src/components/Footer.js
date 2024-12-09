import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-column">
          <h4>Contáctanos</h4>
          <ul className="footer-contact">
            <li><i className="fa-solid fa-phone"></i> + (51) 901427340</li>
            <li><i className="fa-solid fa-envelope"></i> jesus.huamani@gmail.com</li>
            <li><i className="fa-solid fa-map-marker-alt"></i> Av. Claveles de Lurín S/N (a 3 cuadras de Modaza), Lurín, Perú</li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Encuéntranos</h4>
          <p>Estamos ubicados en una zona estratégica para facilitar el acceso a nuestros equipos. Visita nuestras instalaciones o contáctanos para asesoría personalizada.</p>
          {/* Aquí podrías integrar un mapa real usando un iframe de Google Maps si lo deseas */}
        </div>
        
        <div className="footer-column">
          <h4>Síguenos</h4>
          <div className="footer-social">
           {/* <a href="https://www.facebook.com/tu_pagina_facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a> */}
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
           {/* <a href="https://www.instagram.com/tu_perfil_instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> 
            </a> */}
          </div>
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 MaquinariaPro. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
