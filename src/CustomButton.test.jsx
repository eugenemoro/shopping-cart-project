import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CustomButton from "./CustomButton";
import userEvent from "@testing-library/user-event";

describe('Custom Button', () => {
  it('Should render a button with text Click me', () => {
    render(<CustomButton onClick={() => {}}/>);
    const button = screen.getByRole('button', {name: 'Click me'});
    expect(button).toBeInTheDocument();
  })

  it('Should call the onClick function when clicked', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<CustomButton onClick={onClick}/>);
    const button = screen.getByRole('button', {name: 'Click me'});
    await user.click(button);
    expect(onClick).toBeCalled();
  });

  it('Should not call the onClick function when it isnt clicked', () => {
    const onClick = vi.fn();
    render(<CustomButton onClick={onClick}/>)
    expect(onClick).not.toBeCalled();
  });
});