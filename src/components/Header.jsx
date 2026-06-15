import Navbar from "./Navbar";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header className="site-header">
      <div className="header-content container">
        <div className="header-item">
          <span className="logo">Stackly</span>
        </div>
        <Navbar />
        <SearchBox />
      </div>
    </header>
  );
}

export default Header;