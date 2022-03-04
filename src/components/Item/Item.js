import React from "react";
import "./Item.css"

export default function Item(props) {
  const { item, onAdd } = props;
  return (
    <div className="item-card"> 
      <img src={item.imgUrl} />
      <p>{item.name}</p>
      <p>${item.price}</p>
      <button onClick={() => onAdd(item)}>Añadir al carrito</button>
    </div>
    
  );
}
