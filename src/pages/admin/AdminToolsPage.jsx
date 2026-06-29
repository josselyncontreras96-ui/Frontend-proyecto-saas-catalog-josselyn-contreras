import { useEffect, useState, useRef } from "react";
import ToolForm from "../../components/ToolForm";
import {
  getTools,
  createTool,
  deleteTool,
  updateTool,
} from "../../services/toolService";

function AdminToolsPage() {
  const [showForm, setShowForm] = useState(false);
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedTool, setSelectedTool] = useState(null);
  const [message, setMessage] = useState("");
  const [toolToDelete, setToolToDelete] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const messageRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const loadTools = async () => {
      try {
        const data = await getTools();
        setTools(data);
      } catch {
        setError("No se pudieron cargar las herramientas");
      } finally {
        setLoading(false);
      }
    };

    loadTools();
  }, []);

  const handleCreateTool = async (toolData) => {
    try {
      setIsSaving(true);
      const newTool = await createTool(toolData);
      setTools([...tools, newTool]);
      setShowForm(false);
      setMessage("Herramienta creada correctamente");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteTool = async (id) => {
    try {
      setIsSaving(true);
      await deleteTool(id);
      const filteredTools = tools.filter((tool) => tool._id !== id);
      setTools(filteredTools);
      setToolToDelete(null);
      setMessage("Herramienta eliminada correctamente");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdateTool = async (toolId, toolData) => {
    try {
      setIsSaving(true);
      const updatedTool = await updateTool(toolId, toolData);
      const updatedTools = tools.map((tool) => {
        if (tool._id === toolId) {
          return updatedTool;
        }
        return tool;
      });
      setTools(updatedTools);
      setSelectedTool(null);
      setShowForm(false);
      setMessage("Herramienta actualizada correctamente");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    if (!message) return;
    messageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => setMessage(""), 3000);
  }, [message]);

  useEffect(() => {
    if (!toolToDelete) return;
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setToolToDelete(null);
    });
  }, [toolToDelete]);

  useEffect(() => {
    if (!selectedTool) return;
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [selectedTool]);

  if (loading) {
    return <p className="empty-message">Cargando herramientas...</p>;
  }

  if (error) {
    return <p className="empty-message">{error}</p>;
  }

  return (
    <section className="admin-section">
      {message && (
        <p ref={messageRef} className="admin-message">
          {message}
        </p>
      )}

      <div className="admin-page-header">
        <div>
          <h2>Administración de herramientas</h2>
          <p>Listado interno de herramientas SaaS.</p>
        </div>
        <button
        className={`admin-toggle-button ${showForm ? "close" : ""}`}
        type="button"
        onClick={() => {
         setShowForm(!showForm);
           setSelectedTool(null);
  }}
>
  {showForm ? "Cerrar formulario" : "Nueva herramienta"}
</button>
      </div>

      {showForm && (
        <div ref={formRef}>
          <ToolForm
            tool={selectedTool}
            onCreateTool={handleCreateTool}
            onUpdateTool={handleUpdateTool}
            isSaving={isSaving}
          />
        </div>
      )}

      <div className="admin-list">
        {tools.map((tool) => (
          <article className="admin-list-item" key={tool._id}>
            <img src={tool.image} alt={tool.name} />
            <div>
              <h3>{tool.name}</h3>
              <p>
                {tool.category} • {tool.pricing}
              </p>
              <div className="admin-actions">
                <button
                  className="admin-action-button edit"
                  type="button"
                  onClick={() => {
                    setSelectedTool(tool);
                    setShowForm(true);
                  }}
                >
                  Editar
                </button>
                <button
                  className="admin-action-button delete"
                  type="button"
                  onClick={() => setToolToDelete(tool)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {toolToDelete && (
        <div className="modal-overlay" onClick={() => setToolToDelete(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Eliminar herramienta</h2>
            <p>
              ¿Desea eliminar <strong>{toolToDelete.name}</strong>?
            </p>
            <div className="modal-actions">
              <button
                disabled={isSaving}
                className="modal-button secondary"
                type="button"
                onClick={() => setToolToDelete(null)}
              >
                Cancelar
              </button>
              <button
                disabled={isSaving}
                className="modal-button danger"
                type="button"
                onClick={() => handleDeleteTool(toolToDelete._id)}
              >
                {isSaving ? "Eliminando..." : "Eliminar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminToolsPage;