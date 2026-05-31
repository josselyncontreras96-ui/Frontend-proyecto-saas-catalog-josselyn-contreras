import { useMemo } from "react";

function useFilteredTools(tools, search, selectedCategory, sortBy) {
  const filteredTools = useMemo(() => {
    let result = tools.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "Todos" || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [tools, search, selectedCategory, sortBy]);

  return { filteredTools };
}

export default useFilteredTools;