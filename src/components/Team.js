import React from "react";
import Navbar from "./Navbar";
import Teamcard from "./Teamcard";
import "../App.css";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div>
          Without bonding and coordination, every project is a fAILURE. look at
          who makes KICKSUP great. ;)
        </div>
        <div className="card-container">
          <Teamcard name={"christiano"} />
          <Teamcard name={"ikercasillas"} />
          <Teamcard name={"james"}/>
          <Teamcard name={"tonikroos"} />
          <Teamcard name={"zidane"} />
        </div>
        <h3>and You ;)</h3>
      </div>
    </>
  );
}
