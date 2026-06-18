import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getToolById } from "../services/toolService";

function ToolDetailPage() {
  const { id } = useParams();

  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTool = async () => {
      try {
        const data = await getToolById(id);
        setTool(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTool();
  }, [id]);

  if (loading) {
    return <p className="empty-message">Cargando herramienta...</p>;
  }

  if (error || !tool) {
    return (
      <main>
        <section className="catalog-section">
          <div className="container">
            <h1>{error || "Herramienta no encontrada"}</h1>
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
            <img src={tool.image} alt={tool.name} />
            <div className="tool-detail-content">
              <h1>{tool.name}</h1>
              <p className="tool-detail-description">{tool.description}</p>
              <p>Categoría: {tool.category}</p>
              <p>Precio: {tool.pricing}</p>
              <p>Valoración: {tool.rating}</p>
              {tool.website && (
                <a
                  className="button"
                  href={tool.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar web
                </a>
              )}
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