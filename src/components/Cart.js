import React from "react";

export default function Cart() {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h3 style={{ flexGrow: 1 }}>CART</h3>
        <img
          height={32}
          width={32}
          src={require("../assets/cart2.png")}
          alt="Cart"
        />
      </div>
      <div className="card-body">
        What's stopping you, designer?
        <div>
          <button className="btn-black btn-style">order now</button>
        </div>
      </div>
    </div>
  );
}
