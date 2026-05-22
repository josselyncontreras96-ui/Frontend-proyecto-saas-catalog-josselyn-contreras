import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <div className="header-content container">
        <div>Stackly</div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;