import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AdminLayout() {
  return (
    <>
      <Header />
      <main>
        <div>
          <div>
            <h1>Panel Administración</h1>
            <p>Gestiona el contenido del catálogo</p>
          </div>
          <nav>
            <Link to="/admin/tools">Herramientas</Link>
            <Link to="/">Ver sitio público</Link>
          </nav>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AdminLayout;