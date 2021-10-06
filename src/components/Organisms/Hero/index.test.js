import { render } from "@testing-library/react";
import Hero from "./";

describe("Hero", () => {
  it("renders a Hero component", () => {
    const { container } = render(<Hero />);

    const hero = container.querySelector("section");
    expect(hero).toBeVisible();
  });
});

describe("props", () => {
  it("renders a title", () => {
    const { container } = render(<Hero title="title" />);

    const hero = container.querySelector("section");
    expect(hero).toHaveTextContent("title");
  });

  it("renders text", () => {
    const { container } = render(<Hero text="text" />);

    const hero = container.querySelector("section");
    expect(hero).toHaveTextContent("text");
  });
});
