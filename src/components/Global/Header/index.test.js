import { render } from "@testing-library/react";
import Header from "./";

describe("header", () => {
  it("renders a header component", () => {
    const { container } = render(<Header />);

    const header = container.querySelector("header");
    expect(header).toBeVisible();
  });
});

describe("props", () => {
  it("renders children passed to header component", () => {
    const { container } = render(<Header children="children" />);

    const header = container.querySelector("header");
    expect(header).toHaveTextContent("children");
  });
});
