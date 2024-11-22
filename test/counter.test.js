import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter Component", () => {
  test("renders the initial count value as 0", () => {
    render(<Counter />);
    const countElement = screen.getByText(/Count: 0/i);
    expect(countElement).toBeInTheDocument();
  });

  test("increments count when increment button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/Increment/i);
    fireEvent.click(incrementButton);
    const countElement = screen.getByText(/Count: 1/i);
    expect(countElement).toBeInTheDocument();
  });

  test("decrements count when decrement button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByText(/Decrement/i);
    fireEvent.click(decrementButton);
    const countElement = screen.getByText(/Count: -1/i);
    expect(countElement).toBeInTheDocument();
  });
});
