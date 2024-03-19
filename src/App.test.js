// App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders TiramisuApp component", () => {
    render(<App />);
    const tiramisuAppElement = screen.getByTestId("tiramisu-app");
    expect(tiramisuAppElement).toBeInTheDocument();
  });
});
