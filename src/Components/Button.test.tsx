// src/components/Button.test.tsx
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button Component", () => {
  it("renders with the correct label", () => {
    render(<Button label="Click me" onClick={() => {}} />);

    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("triggers onClick when clicked", async () => {
    const onClickMock = vi.fn();
    render(<Button label="Click me" onClick={onClickMock} />);

    const buttonElement = screen.getByRole("button", { name: /click me/i });
    await userEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
