import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTools } from "../services/toolService";

function SearchBox() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (search.trim() === "") return;

    const loadTools = async () => {
      const tools = await getTools(search);
      setResults(tools.slice(0, 3));
    };

    loadTools();
  }, [search]);

  return (
    <div className="search-box">
      <input
        className="search-box-input"
        type="search"
        placeholder="Buscar..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {search.trim() != "" && (
        <div className="search-box-results">
          {results.length > 0 ? (
            results.map((tool) => (
              <Link
                key={tool._id}
                onClick={() => setSearch("")}
                className="search-box-result"
                to={`/catalog/${tool._id}`}
              >
                <strong>{tool.name}</strong>
                <span>
                  {tool.category} • {tool.pricing}
                </span>
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