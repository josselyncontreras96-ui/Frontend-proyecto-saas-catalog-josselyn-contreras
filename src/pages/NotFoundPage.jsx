import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main>
      <section className="catalog-section">
        <div className="container">
          <h1>Página no encontrada</h1>
          <p>La página que estás buscando no existe.</p>
          <Link to="/" className="button">
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;