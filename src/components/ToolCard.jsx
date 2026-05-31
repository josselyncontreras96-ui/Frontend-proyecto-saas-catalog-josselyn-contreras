import { useNavigate } from "react-router-dom";

function getCategoryIcon(category) {
  const icons = {
    Productividad: "📋",
    CRM: "👥",
    Analytics: "📊",
    Marketing: "📧",
    DevOps: "🖥️",
    Diseño: "🎨",
    Pagos: "💳",
  };
  return icons[category] || "🔧";
}

function ToolCard({ tool }) {
  const navigate = useNavigate();
  return (
    <article
      className={`tool-card ${tool.featured ? "featured" : ""}`}
      onClick={() => navigate(`/catalog/${tool.id}`)}
    >
      <img src={tool.image} alt={tool.name} />
      <div className="tool-card-content">
        <div className="tool-card-icon">
          {getCategoryIcon(tool.category)}
        </div>
        <h3>{tool.name}</h3>
        <p>{tool.category}</p>
        <span className={`pill-${tool.pricing === "Freemium" ? "freemium" : tool.pricing === "De pago" ? "paid" : "free"}`}>
          {tool.pricing}
        </span>
        <span> • ⭐ {tool.rating}</span>
      </div>
    </article>
  );
}

export default ToolCard;