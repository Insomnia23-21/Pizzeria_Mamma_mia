import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App'; 

function Home({ pizzas }) {
  const { addToCart } = useContext(CartContext); 
  return (
    <div className="row mt-4">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="col-md-3 mb-4">
          <div className="card">
            <img
              src={pizza.img}
              className="card-img-top"
              alt={pizza.name}
            />
            <div className="card-body">
              <h5 className="card-title">{pizza.name}</h5>
              <p className="card-text">
                <b>Ingredientes:</b>
                <ul>
                  {pizza.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </p>
              <p className="card-text">
                <b>Precio:</b> ${pizza.price}
              </p>
              <div className="d-flex justify-content-between">
                <Link
                  to={`/pizza/${pizza.id}`}
                  className="btn btn-primary"
                >
                  Ver Más
                </Link>
                <button
                  className="btn btn-success"
                  onClick={() => addToCart(pizza)} 
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
