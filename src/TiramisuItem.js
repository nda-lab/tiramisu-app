// src/TiramisuItem.js

import React, { useState } from "react";
import calculateCalories from "adjust-sugar";
import "./App.css";
const TiramisuItem = ({ item, addToCart }) => {
  const [amountOfSugar, setAmountOfSugar] = useState(item.sugar);

  const handleSugarChange = (e) => {
    const newAmountOfSugar = parseFloat(e.target.value);
    setAmountOfSugar(newAmountOfSugar);
  };

  const handleAddToCart = () => {
    const newItem = {
      ...item,
      amountOfSugar,
      calories: calculateCalories(amountOfSugar),
    };
    addToCart(newItem);
  };

  return (
    <div className="tiramisu-item">
      <img
        src={item.photo}
        alt={item.flavor}
        style={{ maxWidth: "300px", maxHeight: "300px" }}
      />
      <h2>{item.flavor}</h2>
      <p>Price: {item.price} euros</p>
      <label>
        Sugar:
        <input
          type="number"
          value={amountOfSugar}
          onChange={handleSugarChange}
        />
        grams
      </label>
      <p style={{ fontSize: "1.2em", fontWeight: "bold" }}>
        Calories from Sugar: {calculateCalories(amountOfSugar)}
      </p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default TiramisuItem;
