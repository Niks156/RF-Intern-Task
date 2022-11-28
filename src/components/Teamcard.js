import React from "react";
import "../App.css";

export default function Teamcard({ ...props }) {
  return (
    <div className="main-container">
      <div>
        <img
          src={require(`../assets/${props.name}.jpg`)}
          height={230}
          width={180}
          style={{ objectFit: "cover" }}
          alt="member"
        />
      </div>
      <div className="card-details">
        <div>{props.name}</div>
        <div className="card-socialmedia">
          <img
            src={require("../assets/medium.png")}
            height={22}
            width={22}
            alt="medium"
          />
          <img
            src={require("../assets/linkedin.png")}
            height={22}
            width={22}
            alt="linkedin"
          />
        </div>
      </div>
    </div>
  );
}
