import React from "react";
import Shoe from "./Shoe";
import "../App.css";

export default function ShoesList() {
  return (
    <div className="shoe-container">
      <div className="shoe-header">
        <h3 id="shoes">SHOES</h3>
        <div className="element-2">
          <img
            src={require("../assets/search.png")}
            alt="search"
            height={20}
            width={20}
          />
          <button className="btn">sort by</button>
        </div>
      </div>
      <div className="shoe-flex">
        <Shoe name={"Puma"} img={"shoelist1"} price={2000} />
        <Shoe name={"Adidas"} img={"shoelist2"} price={2500} />
        <Shoe name={"Nike"} img={"shoelist3"} price={6000} />
        <Shoe name={"Puma"} img={"shoelist1"} price={2000} />
        <Shoe name={"Adidas"} img={"shoelist2"} price={2500} />
        <Shoe name={"Nike"} img={"shoelist3"} price={6000} />
      </div>
    </div>
  );
}
