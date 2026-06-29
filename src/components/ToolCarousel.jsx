import ToolCard from "./ToolCard";

function ToolCarousel({ tools }) {
  return (
    <section className="tool-carousel-section">
      <div className="container">
        <div className="tool-carousel-header">
          <h2>Contenido destacado</h2>
          <span>Desleza para ver más</span>
        </div>
        <div className="tool-carousel">
          {tools.map((tool) => (
            <div className="tool-carousel-item" key={tool.id}>
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolCarousel;