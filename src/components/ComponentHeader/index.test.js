import { render } from "@testing-library/react";
import ComponentHeader from "./";

describe("Component Header", () => {
  it("renders a ComponentHeader component", () => {
    const { container } = render(<ComponentHeader />);

    const componentHeader = container.querySelector("div");
    expect(componentHeader).toBeVisible();
  });
});

describe("props", () => {
  it("renders a title", () => {
    const { container } = render(<ComponentHeader title="title" />);

    const componentHeader = container.querySelector("div");
    expect(componentHeader).toHaveTextContent("title");
  });

  it("renders a number", () => {
    const { container } = render(<ComponentHeader number="number" />);

    const componentHeader = container.querySelector("div");
    expect(componentHeader).toHaveTextContent("number");
  });
});
