import { render } from "@testing-library/react";
import LocationSection from "./LocationSection";

describe("Location Section", () => {
  it("renders a LocationSection component", () => {
    const { container } = render(<LocationSection />);

    const locationSection = container.querySelector("div");
    expect(locationSection).toBeVisible();
  });
});
