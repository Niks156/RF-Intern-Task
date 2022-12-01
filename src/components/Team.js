import React from "react";
import Navbar from "./Navbar";
import Teamcard from "./Teamcard";
import "../App.css";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="text-1">
          Without bonding and coordination, every project is a fAILURE. look at
          who makes KICKSUP great. ;)
        </div>
        <div className="card-container">
          <div className="card-responsive">
            <Teamcard name={"christiano"} />
          </div>
          <div className="card-responsive">
            <Teamcard name={"ikercasillas"} />
          </div>
          <div className="card-responsive">
            <Teamcard name={"james"} />
          </div>
          <div className="card-responsive">
            <Teamcard name={"tonikroos"} />
          </div>
          <div className="card-responsive">
            <Teamcard name={"zidane"} />
          </div>
        </div>
        <h3>and You ;)</h3>
      </div>
    </>
  );
}
