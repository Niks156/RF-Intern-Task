import React from "react";
import Navbar from "./Navbar";
import Productpage from "./Productpage";
import Cart from "./Cart";
import "../App.css";

export default function Product() {
  return (
    <>
      <Navbar />
      <div className="product-layout">
        <div>
          <Productpage />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </>
  );
}
