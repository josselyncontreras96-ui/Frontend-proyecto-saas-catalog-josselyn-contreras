import { tools } from "../../data/tools";
import ToolForm from "../../components/ToolForm";
import { useState } from "react";

function AdminToolsPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="admin-section">
      <div className="admin-section-header">
        <div>
          <h2>Administración de herramientas</h2>
          <p>Listado interno de herramientas SaaS.</p>
        </div>
      </div>

      <button className="button" type="button" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cerrar formulario" : "Nueva herramienta"}
      </button>

      {showForm && (
        <ToolForm
          onCreateTool={(form) => console.log("Crear:", form)}
          isSaving={false}
        />
      )}

      <div className="admin-list">
        {tools.map((tool) => (
          <article className="admin-list-item" key={tool.id}>
            <div>
              <h3>{tool.name}</h3>
              <p>{tool.category} • {tool.pricing}</p>
              <p>{tool.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AdminToolsPage;