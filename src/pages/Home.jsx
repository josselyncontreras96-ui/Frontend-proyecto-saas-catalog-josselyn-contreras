import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ToolList from "../components/ToolList";
import ToolCarousel from "../components/ToolCarousel";
import { getTools } from "../services/toolService";

function Home() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTools = async () => {
      try {
        const data = await getTools();
        setTools(data);
      } catch {
        setError("No se pudieron cargar las herramientas");
      } finally {
        setLoading(false);
      }
    };

    loadTools();
  }, []);

  const featuredTools = tools.filter((tool) => tool.featured);
  const latestTools = tools.slice(0, 3);

  if (loading) {
    return <p className="empty-message">Cargando herramientas...</p>;
  }

  if (error) {
    return <p className="empty-message">{error}</p>;
  }

  return (
    <main>
      <section className="hero">
        <div className="container">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1100&h=200&fit=crop"
            alt="Stackly hero"
          />
          <span className="hero-label">Proyecto final</span>
          <h1>Catálogo de herramientas SaaS</h1>
          <p>
           Descubre y compara herramientas SaaS para diferentes categorías.
           Consulta sus características, precios y enlaces oficiales en un solo lugar.
          </p>
          <Link className="button" to="/catalog">
            Ver catálogo
          </Link>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <ToolCarousel tools={featuredTools} />
        </div>
      </section>

      <section className="latest-section">
        <div className="container">
          <h2>Últimas herramientas</h2>
          <ToolList tools={latestTools} />
        </div>
      </section>
    </main>
  );
}

export default Home;