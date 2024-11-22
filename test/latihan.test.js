import { render, screen, fireEvent } from "@testing-library/react";
import { Counter, Greeting, AlertButton } from "./latihan";
import "@testing-library/jest-dom";
import React from "react";

// Mocking global alert for AlertButton tests
global.alert = jest.fn();

describe("Counter Component", () => {
  test("renders initial count as 0", () => {
    render(<Counter />);
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue).toHaveTextContent("0");
  });

  test("increments count when increment button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-button");
    fireEvent.click(incrementButton);
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue).toHaveTextContent("1");
  });

  test("decrements count when decrement button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId("decrement-button");
    fireEvent.click(decrementButton);
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue).toHaveTextContent("-1");
  });

  test("resets count when reset button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-button");
    const resetButton = screen.getByTestId("reset-button");
    fireEvent.click(incrementButton); // Increment count to 1
    fireEvent.click(resetButton); // Reset to 0
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue).toHaveTextContent("0");
  });
});

describe("Greeting Component", () => {
  test("renders the correct greeting message", () => {
    const name = "Alice";
    render(<Greeting name={name} />);
    const greetingElement = screen.getByTestId("greeting");
    expect(greetingElement).toHaveTextContent(`Hello, ${name}`);
  });
});

describe("AlertButton Component", () => {
  test("shows an alert with the correct message when clicked", () => {
    const message = "This is a test alert!";
    render(<AlertButton message={message} />);
    const alertButton = screen.getByTestId("alert-button");
    fireEvent.click(alertButton);
    expect(global.alert).toHaveBeenCalledWith(message);
  });
});
