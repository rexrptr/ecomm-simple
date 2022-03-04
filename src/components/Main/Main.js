import React from "react";
import Item from "../Item/Item";
import "./Main.css";

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <div className="main">
      <div className="item-display">
        {products.map((item) => (
          <Item key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
}
