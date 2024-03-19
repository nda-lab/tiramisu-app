// src/App.js

import React, { useState } from "react";
import TiramisuItem from "./TiramisuItem";
import "./App.css";
import chocolate from "./assets/chocolate_photo.jpg";
import strawberry from "./assets/strawberry_photo.jpg";
import raspberry from "./assets/raspberry_photo.jpg";
import caramel from "./assets/caramel_photo.jpg";
import logo from "./assets/logo_tiramisu.png";

const fakeTiramisuData = [
  {
    flavor: "Chocolate Tiramisu",
    photo: chocolate,
    price: 5.99,
    sugar: 30,
  },
  {
    flavor: "Strawberry Tiramisu",
    photo: strawberry,
    price: 6.99,
    sugar: 25,
  },
  {
    flavor: "Raspberry Tiramisu",
    photo: raspberry,
    price: 7.99,
    sugar: 35,
  },
  {
    flavor: "Caramel Tiramisu",
    photo: caramel,
    price: 8.99,
    sugar: 40,
  },
];

const TiramisuApp = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App" data-testid="tiramisu-app">
      <header className="App-header">
        <img
          src={logo}
          alt={"Divine Tiramisu"}
          style={{ maxWidth: "200px", maxHeight: "200px" }}
        />
        <div className="slogan-container">
          <h1>Divine Tiramisu</h1>
          <p className="slogan">
            A Slice of <span className="slogan-highlight">Heaven</span> in Every
            Order
          </p>
        </div>
      </header>
      <main>
        {fakeTiramisuData.map((item, index) => (
          <TiramisuItem key={index} item={item} addToCart={addToCart} />
        ))}
      </main>
      <footer>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.flavor}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default TiramisuApp;
