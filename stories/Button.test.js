import { render, screen, fireEvent } from "@testing-library/react"
import { Button } from './Button';

describe("Button", () => {
    it("renders a button component", () => {
        const { container } = render(<Button />)

        const button = container.querySelector("button")
        expect(button).toBeVisible()
    })
})

describe("props", () => {
    it("renders a label passed to button", () => {
        const { container } = render(<Button label="button" />)

        const button = container.querySelector("button")
        expect(button).toHaveTextContent("button")
    })
})