import React from "react";
import "../App.css";

export default function Teamcard({ ...props }) {
  return (
    <div className="main-container">
      <div>
        <img
          src={require("../assets/christiano.jpg")}
          height={180}
          width={180}
          style={{objectFit: "cover"}}
          alt="member"
        />
      </div>
      <div>
        {props.name}
      </div>
    </div>
  );
}
