import { render } from "@testing-library/react";
import TextAndImage from "./";

describe("Text & Image Component", () => {
  it("renders a TextAndImage component", () => {
    const { container } = render(<TextAndImage />);

    const textAndImage = container.querySelector("div");
    expect(textAndImage).toBeVisible();
  });
});

describe("props", () => {
  it("renders text field", () => {
    const { container } = render(<TextAndImage richTextField1="text" />);

    const textAndImage = container.querySelector("div");
    expect(textAndImage).toHaveTextContent("text");
  });
});
