import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import Home from "./components/Home";
import PizzaDetail from "./components/PizzaDetail";
import Cart from "./components/Cart";


import pizzas from "./pizzas.json";


export const CartContext = createContext(); 
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);
    if (existingPizza) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  const removeFromCart = (pizzaId) => {
    setCart(cart.filter((item) => item.id !== pizzaId));
  };

  const increaseQuantity = (pizzaId) => {
    setCart(
      cart.map((item) =>
        item.id === pizzaId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (pizzaId) => {
    setCart(
      cart.map((item) =>
        item.id === pizzaId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartValue = {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  };

  return (
    <CartContext.Provider value={cartValue}>
      <BrowserRouter>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Pizzeria Mamma Mia!
              </Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/carrito">
                    Carrito
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home pizzas={pizzas} />} />
            <Route
              path="/pizza/:id"
              element={<PizzaDetail pizzas={pizzas} />}
            />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
