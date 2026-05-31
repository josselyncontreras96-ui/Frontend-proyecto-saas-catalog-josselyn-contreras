import { tools } from "../data/tools";
import ToolList from "../components/ToolList";
import { Link } from "react-router-dom";

function Home() {
  const featuredTools = tools.filter((tool) => tool.featured);
  const latestTools = tools.slice(0, 3);

  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="hero-label">Proyecto final</span>
          <h1>Catálogo de herramientas SaaS</h1>
          <p>
            Descubre y compara las mejores herramientas SaaS empresariales.
            Deja que la IA te recomiende la más adecuada para tu negocio.
          </p>
          <Link className="button" to="/catalog">
            Ver catálogo
          </Link>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2>Herramientas destacadas</h2>
          <ToolList tools={featuredTools} />
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
