import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../App'; 

function PizzaDetail({ pizzas }) {
  const { id } = useParams();
  const pizza = pizzas.find((pizza) => pizza.id === id);
  const { addToCart } = useContext(CartContext);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  return (
    <div className="row mt-4">
      <div className="col-md-6">
        <img src={pizza.img} className="img-fluid" alt={pizza.name} />
      </div>
      <div className="col-md-6">
        <h2 className="mb-3">{pizza.name}</h2>
        <p>{pizza.desc}</p>
        <p>
          <b>Ingredientes:</b>
          <ul>
            {pizza.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </p>
        <p>
          <b>Precio:</b> ${pizza.price}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => addToCart(pizza)}
        >
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
}

export default PizzaDetail;