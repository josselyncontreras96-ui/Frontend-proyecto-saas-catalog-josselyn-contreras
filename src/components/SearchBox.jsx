import { Link } from "react-router-dom";
import { useState } from "react";
import { tools } from "../data/tools";

function SearchBox() {
  const [search, setSearch] = useState("");

  const normalizedSearch = search.toLowerCase().trim();

  const results = tools
    .filter((tool) => {
      const name = tool.name.toLowerCase();
      const category = tool.category.toLowerCase();
      return name.includes(normalizedSearch) || category.includes(normalizedSearch);
    })
    .slice(0, 3);

  return (
    <div className="search-box">
      <input
        className="search-box-input"
        type="search"
        placeholder="Buscar..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {search.trim() !== "" && (
        <div className="search-box-results">
          {results.length > 0 ? (
            results.map((tool) => (
              <Link
                key={tool.id}
                onClick={() => setSearch("")}
                className="search-box-result"
                to={`/catalog/${tool.id}`}
              >
                <strong>{tool.name}</strong>
                <span>{tool.category} • {tool.pricing}</span>
              </Link>
            ))
          ) : (
            <p className="search-box-empty">No se encontraron resultados</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBox;