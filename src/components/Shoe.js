import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

export default function Shoe({ ...props }) {
  const styles = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div className="shoe-component">
      <Link to="/store/product" style={styles}>
        <img
          src={require(`../assets/${props.img}.webp`)}
          alt="shoe"
          height={200}
          width={200}
          style={{ objectFit: "cover" }}
        />
        <div>{props.name}</div>
        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>Rs {props.price}/-</div>
          <div>Star Rating</div>
        </div>
      </Link>
    </div>
  );
}
