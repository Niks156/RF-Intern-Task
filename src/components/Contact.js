import React from "react";
import "../css/contact.css";
import Navbar from "./Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="center">
        <div className="box">
          <h2>REACH US AT</h2>
          <div>
            <b>
              Support@kicksup.com <br />
            </b>
            <span>for any technical support</span>
          </div>
          <div>
            <b>
              info@kicksup.com <br />
            </b>
            <span>for more information</span>
          </div>
          <div>
            <b>
              feedback@kicksup.com <br />
            </b>
            <span>to send your feedback </span>
          </div>
          <div>
            <b>
              jobs@kicksup.com <br />
            </b>
            <span>to work with us</span>
          </div>
        </div>
        <div className="handles">
          Stay in touch <br />
          <div className="icons">
            <img src={require("../assets/twitter.png")} alt="twitter" />
            <img src={require("../assets/insta.png")} alt="instagram" />
            <img src={require("../assets/facebook.png")} alt="facebook" />
          </div>
        </div>
      </div>
    </>
  );
}
