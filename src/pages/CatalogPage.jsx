import { useState } from "react";
import tools from "../data/tools";
import ToolList from "../components/ToolList";
import ToolFilters from "../components/ToolFilters";
import useFilteredTools from "../hooks/useFilteredTools";

function CatalogPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("default");

  const { filteredTools } = useFilteredTools(tools, search, selectedCategory, sortBy);
  const hasResults = filteredTools.length > 0;
  const categories = ["Todos", ...new Set(tools.map((tool) => tool.category))];

  return (
    <main>
      <section className="catalog-section">
        <div className="container">
          <div className="section-header">
            <h2>Explorar catálogo</h2>
            <p>Busca herramientas SaaS por nombre y descripción.</p>
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
            <ToolList tools={filteredTools} />
          ) : (
            <p className="empty-message">
              No encontramos resultados para tu búsqueda
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default CatalogPage;