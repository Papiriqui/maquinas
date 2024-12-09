import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="contact">
      <h2>Contáctanos</h2>
      <p>Solicita una cotización o información adicional.</p>
      <form className="contact-form">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
