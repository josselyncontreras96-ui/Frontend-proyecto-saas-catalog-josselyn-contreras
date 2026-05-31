const tools = [
  {
    id: 1,
    name: "Notion",
    category: "Productividad",
    description: "Docs, wikis y gestión de proyectos en un solo workspace.",
    pricing: "Freemium",
    rating: 4.8,
  },
  {
    id: 2,
    name: "HubSpot",
    category: "CRM",
    description: "Gestión de clientes, ventas y marketing automatizado.",
    pricing: "De pago",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Datadog",
    category: "DevOps",
    description: "Monitorización de infraestructura y logs en tiempo real.",
    pricing: "Freemium",
    rating: 4.7,
  },
];

function Catalog() {
  return (
    <main>
      <h2>Catálogo de herramientas</h2>

      <div>
        {tools.map((tool) => (
          <div key={tool.id}>
            <h3>{tool.name}</h3>
            <p>{tool.category}</p>
            <p>{tool.description}</p>
            <p>{tool.pricing}</p>
            <p>⭐ {tool.rating}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Catalog;