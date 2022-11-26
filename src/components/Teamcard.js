import React from "react";
import "../App.css";

export default function Teamcard() {
  return (
    <div className="main-container">
      <div>
        <img
          src={require("../assets/christiano.jpg")}
          height={300}
          width={200}
          style={{objectFit: "cover"}}
          alt="member"
        />
      </div>
      <div>
        Social media handles
      </div>
    </div>
  );
}
