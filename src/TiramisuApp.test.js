// TiramisuApp.test.js
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TiramisuApp from "./TiramisuApp";

describe("TiramisuApp", () => {
  test("renders TiramisuApp component", () => {
    render(<TiramisuApp />);

    // Assert that the logo alt text is present
    expect(screen.getByAltText("Divine Tiramisu")).toBeInTheDocument();

    // Assert that the slogan text is present
    expect(screen.getByText("Divine Tiramisu")).toBeInTheDocument();

    // Assert that the items are rendered
    expect(screen.getByText("Chocolate Tiramisu")).toBeInTheDocument();
    expect(screen.getByText("Strawberry Tiramisu")).toBeInTheDocument();
    expect(screen.getByText("Raspberry Tiramisu")).toBeInTheDocument();
    expect(screen.getByText("Caramel Tiramisu")).toBeInTheDocument();
  });
});
