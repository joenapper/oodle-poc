import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders a hero component", () => {
    const { container } = render(<Hero />);

    const hero = container.querySelector("section");
    expect(hero).toBeVisible();
  });
});

describe("props", () => {
  it("renders children passed to header component", () => {
    const { container } = render(<Hero children="children" />);

    const hero = container.querySelector("section");
    expect(hero).toHaveTextContent("children");
  });

  it("renders button text passed to header component", () => {
    const { container } = render(<Hero buttonText="Button" />);

    const hero = container.querySelector("section");
    expect(hero).toHaveTextContent("Button");
  });
});
