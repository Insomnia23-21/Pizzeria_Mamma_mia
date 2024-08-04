import React, { useContext } from 'react';
import { CartContext } from '../App'; 

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, cartTotal } = useContext(CartContext);

  return (
    <div className="row mt-4">
      <div className="col-md-12">
        <h2>Carrito de Compras</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((pizza) => (
              <tr key={pizza.id}>
                <td>
                  <img
                    src={pizza.img}
                    className="img-fluid"
                    style={{ maxWidth: "100px" }}
                    alt={pizza.name}
                  />
                </td>
                <td>{pizza.name}</td>
                <td>${pizza.price}</td>
                <td>
                  <div className="d-flex">
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => decreaseQuantity(pizza.id)}
                    >
                      -
                    </button>
                    <span className="mx-2">{pizza.quantity}</span>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => increaseQuantity(pizza.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${(pizza.price * pizza.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(pizza.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
          <button className="btn btn-success">Ir a Pagar</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;