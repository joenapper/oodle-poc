import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("footer", () => {
  it("renders a footer component", () => {
    const { container } = render(<Footer />);

    const footer = container.querySelector("footer");
    expect(footer).toBeVisible();
  });
});

describe("props", () => {
  it("renders children passed to footer component", () => {
    const { container } = render(<Footer children="children" />);

    const footer = container.querySelector("footer");
    expect(footer).toHaveTextContent("children");
  });
});
