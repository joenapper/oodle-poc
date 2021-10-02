import { render } from "@testing-library/react";
import Container from "./";

describe("Container", () => {
  it("renders a Container component", () => {
    const { container } = render(<Container />);

    const wrapper = container.querySelector("section");
    expect(wrapper).toBeVisible();
  });
});
