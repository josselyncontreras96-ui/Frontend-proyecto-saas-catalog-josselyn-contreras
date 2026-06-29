function ToolFilters({
  search,
  selectedCategory,
  sortBy,
  categories,
  onSearchChange,
  onCategoryChange,
  onSortChange,
}) {
  return (
    <div className="tool-filters">
      <div>
        <label className="search-label" htmlFor="search">
          Buscar por nombre o descripción:
        </label>
        <input
          className="search-input"
          placeholder="Buscar por nombre o descripción..."
          type="search"
          name="search"
          id="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>
      <select
        className="filter-select"
        value={selectedCategory}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select
        className="filter-select"
        value={sortBy}
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="default">Orden por defecto</option>
        <option value="az">A-Z</option>
        <option value="rating">Mejor valoradas</option>
        <option value="pricing">Por precio</option>
      </select>
    </div>
  );
}

export default ToolFilters;