import { render } from "@testing-library/react";
import WhoWeAreCard from "./";

describe("Who We Are Card", () => {
  it("renders a WhoWeAreCard component", () => {
    const { container } = render(<WhoWeAreCard />);

    const card = container.querySelector("div");
    expect(card).toBeVisible();
  });
});

describe("props", () => {
  it("renders a title", () => {
    const { container } = render(<WhoWeAreCard title="title" />);

    const card = container.querySelector("div");
    expect(card).toHaveTextContent("title");
  });

  it("renders text", () => {
    const { container } = render(<WhoWeAreCard text="text" />);

    const card = container.querySelector("div");
    expect(card).toHaveTextContent("text");
  });
});
