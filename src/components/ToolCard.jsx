import { useNavigate } from "react-router-dom";

function ToolCard({ tool }) {
  const navigate = useNavigate();
  return (
    <article
      className="tool-card"
      onClick={() => navigate(`/catalog/${tool.id}`)}
    >
      <img src={tool.image} alt={tool.name} />
      <div className="tool-card-content">
        <h3>{tool.name}</h3>
        <p>{tool.category}</p>
        <span>{tool.pricing} • ⭐ {tool.rating}</span>
      </div>
    </article>
  );
}

export default ToolCard;