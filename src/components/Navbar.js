import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar() {
  const styles = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div className="container">
      <div className="logo">
        <img
          alt="websitelogo"
          height={60}
          width={60}
          src={require("../assets/websitelogo.png")}
        />
      </div>
      <div className="pages">
        <ul>
          <li>HOME</li>
          <li>
            <Link to="/journey" style={styles}>THE JOURNEY</Link>
          </li>
          <li>
            <Link to="/team" style={styles}>TEAM</Link>
          </li>
          <li>
            <Link to="/store" style={styles}>STORE</Link>
          </li>
          <li>
            <Link to="/" style={styles}>CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className="user"> GAGAN </div>
    </div>
  );
}
