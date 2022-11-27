import React from "react";
import "../App.css";

export default function Shoe({ ...props }) {
  return (
    <div style={{ marginTop: 10 }}>
      <img
        src={require(`../assets/${props.img}.webp`)}
        alt="shoe"
        height={200}
        width={200}
        style={{ objectFit: "cover" }}
        onClick={()=> {alert("Hello")}}
      />
      <div>{props.name}</div>
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>Rs {props.price}</div>
        <div>Star Rating</div>
      </div>
    </div>
  );
}
