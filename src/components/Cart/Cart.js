import React from "react";
import "./Cart.css";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.65;
  const shippingPrice = 350;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="cart">
      <h2>Cart</h2>
      <div>{cartItems.length === 0 && <p>Carrito vacio</p>}</div>
      {cartItems.map((item, index) => (
        <div key={index} className="item-single"> 
          {item.name}
          <button onClick={() => onAdd(item)} className="add">
            +
          </button>
          <button onClick={() => onRemove(item)} className="remove">
            -
          </button>
          {item.qty} x ${item.price.toFixed(2)}
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div>
            <p>Item List</p>
            <p>${itemsPrice.toFixed(2)}</p>
          </div>
          <div>
            <p>Taxes</p>
            <p>${taxPrice.toFixed(2)}</p>
          </div>
          <div>
            <p>Shipping</p>
            <p>${shippingPrice.toFixed(2)}</p>
          </div>
          <div>
            <p>Total</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div>
            <button onClick={() => alert("implement checkout")}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
