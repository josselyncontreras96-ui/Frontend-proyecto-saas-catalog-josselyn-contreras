import { categories } from "../data/categories";
import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  description: "",
  category: "",
  pricing: "",
  website: "",
  image: "",
  featured: false,
  rating: "",
};

function ToolForm({ onCreateTool, tool, onUpdateTool, isSaving }) {
  const [form, setForm] = useState(initialForm);
  const isEditing = Boolean(tool);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name.trim()) { alert("Ingrese el nombre"); return; }
    if (!form.description.trim()) { alert("Ingrese una descripción"); return; }
    if (!form.category) { alert("Seleccione una categoría"); return; }
    if (!form.pricing) { alert("Seleccione un tipo de precio"); return; }
    if (!form.image.trim()) { alert("Ingrese una imagen"); return; }
    if (!form.website.trim()) { alert("Ingrese el sitio web"); return; }

    if (isEditing) {
      await onUpdateTool(tool._id, form);
    } else {
      await onCreateTool(form);
    }
    setForm(initialForm);
  };

  useEffect(() => {
    if (tool) {
      setForm({ ...initialForm, ...tool });
    }
  }, [tool]);

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <h2>{isEditing ? "Editar herramienta" : "Nueva herramienta"}</h2>

      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input type="text" placeholder="Notion" id="name" name="name" value={form.name} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción:</label>
        <textarea id="description" name="description" value={form.description} onChange={handleChange}></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="category">Categoría:</label>
        <select id="category" name="category" value={form.category} onChange={handleChange}>
          <option value="">Seleccionar categoría</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.title}>{cat.title}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="pricing">Precio:</label>
        <select id="pricing" name="pricing" value={form.pricing} onChange={handleChange}>
          <option value="">Seleccionar tipo</option>
          <option value="Gratis">Gratis</option>
          <option value="Freemium">Freemium</option>
          <option value="De pago">De pago</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="website">Sitio web:</label>
        <input type="text" name="website" id="website" value={form.website} onChange={handleChange} placeholder="https://..." />
      </div>

      <div className="form-group">
        <label htmlFor="image">Imagen:</label>
        <input type="text" name="image" id="image" value={form.image} onChange={handleChange} placeholder="https://..." />
      </div>

      {form.image.trim() && (
        <div className="image-preview">
          <img src={form.image} alt="Vista previa" />
        </div>
      )}

      <div className="form-group">
        <label htmlFor="rating">Valoración:</label>
        <input type="number" name="rating" id="rating" value={form.rating} onChange={handleChange} min="0" max="5" step="0.1" />
      </div>

      <div className="form-group">
        <label htmlFor="featured">Destacado:</label>
        <input type="checkbox" name="featured" id="featured" checked={form.featured} onChange={handleChange} />
      </div>

      <button disabled={isSaving} className="button movie-form-button" type="submit">
        {isSaving ? "Guardando..." : "Guardar herramienta"}
      </button>
    </form>
  );
}

export default ToolForm;