import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ToolCard from "../components/ToolCard";

const tool = {
  _id: "1",
  name: "Notion",
  category: "Productividad",
  pricing: "Freemium",
  rating: 4.8,
  image: "https://example.com/notion.jpg",
};

describe("ToolCard", () => {
  test("espero que muestre la informacion de una herramienta", () => {
    render(
      <MemoryRouter>
        <ToolCard tool={tool} />
      </MemoryRouter>,
    );

    const image = screen.getByAltText("Notion");
    expect(image).toBeInTheDocument();

    expect(screen.getByAltText("Notion")).toBeInTheDocument();

    expect(image).toHaveAttribute("src", "https://example.com/notion.jpg");

    expect(screen.getByText(/Notion/i)).toBeInTheDocument();
    expect(screen.getByText("Productividad")).toBeInTheDocument();
    expect(screen.getByText("Freemium")).toBeInTheDocument();
  });
});