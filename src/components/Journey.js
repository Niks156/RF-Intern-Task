import React from "react";
import Navbar from "./Navbar";
import "../App.css";

export default function Journey() {
  return (
    <>
      <Navbar />
      <div className="journey-container">
        <div className="img-1">
          <img
            src={require("../assets/grasspic.jpg")}
            height={570}
            width={1350}
            alt="Grass"
          />
          <h1 id="title">THE JOURNEY</h1>
        </div>
        <div className="img-2">
          <img
            src={require("../assets/photo4.jpg")}
            height={400}
            width={1350}
            alt="Black Bg"
          />
          <div className="text">
            <div className="para-1">
              <h3>THE ROOTS</h3>
              <div>
                Our entire life when we shop, we are limited by choices that are
                there in a store. We are often on the side where we buy our
                favourite coloured shoes made by someone else but what if we
                designed it? What if we could involve in the making of a shoe we
                want to buy? This little thought sprouted to become what we are
                today, KICKSUP! ;)
              </div>
            </div>
            <div className="para-2">
              <h3>CHAPTER I</h3>
              <div>
                Our entire life when we shop, we are limited by choices that are
                there in a store. We are often on the side where we buy our
                favourite coloured shoes made by someone else but what if we
                designed it? What if we could involve in the making of a shoe we
                want to buy? This little thought sprouted to become what we are
                today, KICKSUP! ;)
              </div>
            </div>
            <div className="para-3">
              <h3>CHAPTER II</h3>
              <div>
                Our entire life when we shop, we are limited by choices that are
                there in a store. We are often on the side where we buy our
                favourite coloured shoes made by someone else but what if we
                designed it? What if we could involve in the making of a shoe we
                want to buy? This little thought sprouted to become what we are
                today, KICKSUP! ;)
              </div>
            </div>
            {/* <div className="para-4">
              <h3>KICKSUP</h3>
              <div>
                Our entire life when we shop, we are limited by choices that are
                there in a store. We are often on the side where we buy our
                favourite coloured shoes made by someone else but what if we
                designed it? What if we could involve in the making of a shoe we
                want to buy? This little thought sprouted to become what we are
                today, KICKSUP! ;)
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
