import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ToolForm from "../components/ToolForm";

describe("ToolForm", () => {
  test("espero que muestre el formulario para crear una herramienta", () => {
    render(
      <ToolForm
        onCreateTool={() => {}}
        onUpdateTool={() => {}}
        isSaving={false}
      />,
    );

    expect(screen.getByText("Nueva herramienta")).toBeInTheDocument();
    expect(screen.getByText("Nombre:")).toBeInTheDocument();
    expect(screen.getByText("Descripción:")).toBeInTheDocument();
    expect(screen.getByText("Categoría:")).toBeInTheDocument();
    expect(screen.getByText("Precio:")).toBeInTheDocument();
    expect(screen.getByText("Sitio web:")).toBeInTheDocument();
    expect(screen.getByText("Imagen:")).toBeInTheDocument();
    expect(screen.getByText("Valoración:")).toBeInTheDocument();
    expect(screen.getByText("Destacado:")).toBeInTheDocument();
    expect(screen.getByText("Guardar herramienta")).toBeInTheDocument();
  });

  test("espero que me permita completar los datos del formulario", () => {
    render(
      <ToolForm
        onCreateTool={() => {}}
        onUpdateTool={() => {}}
        isSaving={false}
      />,
    );

    fireEvent.click(screen.getByLabelText("Nombre:"), {
      target: { value: "Slack" },
    });

    fireEvent.click(screen.getByLabelText("Descripción:"), {
      target: { value: "Herramienta de comunicación" },
    });

    expect(screen.getByDisplayValue("Slack")).toBeInTheDocument();
    expect(
      screen.getByDisplayValue("Herramienta de comunicación"),
    ).toBeInTheDocument();
  });

  test("espero que muestre los datos de la herramienta a editar", () => {
    const tool = {
      _id: "1",
      name: "Notion",
      description: "Docs y gestión de proyectos",
      category: "Productividad",
      pricing: "Freemium",
      website: "https://notion.so",
      image: "https://example.com/notion.jpg",
      rating: 4.8,
      featured: true,
    };

    render(
      <ToolForm
        tool={tool}
        onCreateTool={() => {}}
        onUpdateTool={() => {}}
        isSaving={false}
      />,
    );

    expect(screen.getByText("Editar herramienta")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Notion")).toBeInTheDocument();
  });
});