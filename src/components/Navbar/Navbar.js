import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  const { countCart } = props;
  return (
    <header>
      <div className="logo">
        <h1>good clothes</h1>
      </div>
      <div className="links">
        <p>
          Cart {""}
          {countCart ? <button className="badge">{countCart}</button> : ""}
        </p>
      </div>
    </header>
  );
}
