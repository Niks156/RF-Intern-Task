import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import Teamcard from "./Teamcard";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <h2>
          Without bonding and coordination, every project is a fAILURE. look at
          who makes KICKSUP great. ;)
        </h2>
        <div className="card-container">
          <Teamcard name={"Christiano"} />
          <Teamcard name={"Zlatan"} />
          <Teamcard name={"Neymar"}/>
          <Teamcard name={"Mbappe"} />
          <Teamcard name={"Messi"} />
        </div>
        <h1>and You ;)</h1>
      </div>
    </>
  );
}
