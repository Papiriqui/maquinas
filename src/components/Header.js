import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        {/*<img src="/img/logo.png" alt="Logo" className="logo" />*/}
        <h1 className="company-name">Equipos y Maquinarias - Lurín</h1>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
