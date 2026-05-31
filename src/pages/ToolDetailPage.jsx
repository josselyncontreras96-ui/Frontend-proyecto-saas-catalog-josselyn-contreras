import { Link, useParams } from "react-router-dom";
import { tools } from "../data/tools";

function ToolDetailPage() {
  const { id } = useParams();
  const tool = tools.find((t) => t.id == id);

  if (!tool) {
    return (
      <main>
        <section className="catalog-section">
          <div className="container">
            <h1>Herramienta no encontrada</h1>
            <Link className="button" to="/catalog">
              Volver al catálogo
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="catalog-section">
        <div className="container">
          <article className="tool-detail">
            <div className="tool-detail-content">
              <h1>{tool.name}</h1>
              <p className="tool-detail-description">{tool.description}</p>
              <p>Categoría: {tool.category}</p>
              <p>Precio: {tool.pricing}</p>
              <span>⭐ {tool.rating}</span>
              <a href={tool.website} target="_blank" rel="noreferrer">
                Visitar sitio web
              </a>
            </div>
          </article>
          <Link className="button" to="/catalog">
            Volver al catálogo
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ToolDetailPage;