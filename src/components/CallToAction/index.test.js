import { render } from "@testing-library/react";
import CallToAction from "./";

describe("Call To Action", () => {
  it("renders a CallToAction component", () => {
    const { container } = render(<CallToAction />);

    const cta = container.querySelector("div");
    expect(cta).toBeVisible();
  });
});
