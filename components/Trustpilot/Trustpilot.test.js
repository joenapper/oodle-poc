import { render } from "@testing-library/react";
import Trustpilot from "./Trustpilot";

describe("header", () => {
  it("renders a Trustpilot component", () => {
    const { container } = render(<Trustpilot />);

    const trustpilot = container.querySelector("div");
    expect(trustpilot).toBeVisible();
  });
});

describe("props", () => {
  it("renders an error message if no version is passed", () => {
    const { container } = render(<Trustpilot />);

    const trustpilot = container.querySelector("div");
    expect(trustpilot).toHaveTextContent(
      "It appears that your browser (or its extension) is blocking Trustpilot."
    );
  });
});
