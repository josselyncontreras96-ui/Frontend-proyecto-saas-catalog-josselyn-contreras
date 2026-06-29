function useFilteredTools(tools, search, selectedCategory, sortBy) {
  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool?.description?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todos" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedTools = [...filteredTools].sort((a, b) => {
    if (sortBy === "az") {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }
    if (sortBy === "rating") {
      if (a.rating > b.rating) return -1;
      if (a.rating < b.rating) return 1;
      return 0;
    }
    if (sortBy === "pricing") {
      if (a.pricing < b.pricing) return -1;
      if (a.pricing > b.pricing) return 1;
      return 0;
    }
    return 0;
  });

  return { filteredTools, sortedTools };
}

export default useFilteredTools;