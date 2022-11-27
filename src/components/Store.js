import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import ShoesList from "./ShoesList";
import Cart from "./Cart";
import "../App.css";

export default function Store() {
  return (
    <>
      <Navbar />
      <div className="store-layout">
        <div>
          <Filter />
        </div>
        <div>
          <ShoesList />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </>
  );
}
