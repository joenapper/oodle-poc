import { render } from "@testing-library/react";
import Button from "./";

describe("Button", () => {
  it("renders a Button component", () => {
    const { container } = render(<Button />);

    const button = container.querySelector("a");
    expect(button).toBeVisible();
  });
});

describe("props", () => {
  it("renders button text", () => {
    const { container } = render(<Button text="text" />);

    const button = container.querySelector("a");
    expect(button).toHaveTextContent("text");
  });
});
