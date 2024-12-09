import React, { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <button className="nav-toggle" aria-label="Abrir menú" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <li><a href="#inicio" className="nav-link">Inicio</a></li>
        <li><a href="#Nosotros" className="nav-link">Nosotros</a></li>
        <li><a href="#servicios" className="nav-link">Servicios</a></li>
        <li><a href="#contacto" className="nav-link cta">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
