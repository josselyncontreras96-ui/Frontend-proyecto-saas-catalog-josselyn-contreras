import Navbar from "./Navbar";

function Header() {
  return (
    <header className="site-header">
      <div className="header-content container">
        <div className="header-item">
          <span className="logo">Stackly</span>
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;