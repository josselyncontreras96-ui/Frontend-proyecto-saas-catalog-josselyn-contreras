import ToolCard from "./ToolCard";

function ToolList({ tools }) {
  return (
    <div className="tool-list">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}

export default ToolList;