import React from 'react';

const FloatingContact = () => {
  return (
    <div className="floating-contact">
      <a 
        href="https://wa.me/901427340" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-item whatsapp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      
 {/*  <a 
        href="https://www.facebook.com/tu_pagina_facebook"
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-item facebook"
      >
        <i className="fab fa-facebook-f"></i>
      </a> */}
    </div>
  );
};

export default FloatingContact;
