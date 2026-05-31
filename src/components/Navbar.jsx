import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="header-item">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/catalog">Catálogo</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  );
}

export default Navbar;