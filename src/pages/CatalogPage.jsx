import ToolList from "../components/ToolList";
import { useState, useEffect } from "react";
import { getTools } from "../services/toolService";
import ToolFilters from "../components/ToolFilters";
import useFilteredTools from "../hooks/UseFilteredTools";

function CatalogPage() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("default");

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

  const { sortedTools } = useFilteredTools(tools, search, selectedCategory, sortBy);

  const hasResults = sortedTools.length > 0;

  const categories = ["Todos", ...new Set(tools.map((tool) => tool.category))];

  if (loading) {
    return <p className="empty-message">Cargando herramientas...</p>;
  }

  if (error) {
    return <p className="empty-message">{error}</p>;
  }

  return (
    <main>
      <section className="catalog-section">
        <div className="container">
          <div className="section-header">
            <h2>Explorar catálogo</h2>
            <p>Busca herramientas SaaS por título y descripción.</p>
          </div>

          <ToolFilters
            search={search}
            selectedCategory={selectedCategory}
            sortBy={sortBy}
            categories={categories}
            onSearchChange={setSearch}
            onCategoryChange={setSelectedCategory}
            onSortChange={setSortBy}
          />

          {hasResults ? (
            <ToolList tools={sortedTools} />
          ) : (
            <p className="empty-message">
              No encontramos resultados para la búsqueda
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default CatalogPage;