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
    <div className="filters">
      <input
        type="text"
        placeholder="Buscar herramienta..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="default">Ordenar por</option>
        <option value="rating">Mejor valoradas</option>
        <option value="name">Nombre A-Z</option>
      </select>
    </div>
  );
}

export default ToolFilters;