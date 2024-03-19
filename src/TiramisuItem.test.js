// TiramisuItem.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import TiramisuItem from "./TiramisuItem";

jest.mock("adjust-sugar", () => jest.fn().mockReturnValue(100)); // Mocking the calculateCalories function

describe("TiramisuItem", () => {
  const item = {
    flavor: "Chocolate Tiramisu",
    photo: "chocolate_photo.jpg",
    price: 5.99,
    sugar: 30,
  };

  test("renders TiramisuItem component with correct details", () => {
    render(<TiramisuItem item={item} />);

    expect(screen.getByAltText("Chocolate Tiramisu")).toBeInTheDocument();
    expect(screen.getByText("Chocolate Tiramisu")).toBeInTheDocument();
    expect(screen.getByText("Price: 5.99 euros")).toBeInTheDocument();
    expect(screen.getByText("Add to Cart")).toBeInTheDocument(); // Remove this line if you don't want to test the "Add to Cart" button
  });
});
