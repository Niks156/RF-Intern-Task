import React from "react";
import "../App.css";

export default function Filter() {
  return (
    <div className="filter-container">
      <div className="filter-title">
        <h3 id="filter">FILTER</h3>
        <img
          src={require("../assets/filter.png")}
          height={40}
          width={40}
          alt="filter"
        />
      </div>
      <div className="filter-cost">
        <h3>Cost</h3>
        <div>
          <label>
            <input type="checkbox" />
            Rs 1500 - 4000
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Rs 4001 - 7000
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Rs 7001+
          </label>
        </div>
      </div>
      <div>
        <h3>Colour</h3>
        <div className="filter-color">
          <div className="color color1"></div>
          <div className="color color2"></div>
          <div className="color color3"></div>
          <div className="color color4"></div>
          <div className="color color5"></div>
        </div>
      </div>
      <div className="filter-design">
        <h3>Design Templates</h3>
        <div>
          <label>
            <input type="checkbox" />2
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />3
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            3+
          </label>
        </div>
      </div>
      <div className="filter-type">
        <h3>Type</h3>
        <div>
          <label>
            <input type="checkbox" />
            Loafers
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Sneakers
          </label>
        </div>
      </div>
      <div className="filter-apply">
        <button className="apply">apply</button>
      </div>
    </div>
  );
}
