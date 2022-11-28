import React from "react";
import { Link } from "react-router-dom";

export default function Productpage() {
  const styles = {
    textDecoration: "none",
    color: "black",
    paddingRight: 10,
  };
  return (
    <div className="product-page-layout">
      <div className="ppage-header">
        <Link to="/store" style={styles}>
          <img
            src={require(`../assets/back-arrow.webp`)}
            alt="back button"
            height={20}
            width={20}
          />
        </Link>
        <span>your design space </span>
      </div>
      <div className="ppage-grid">
        <div className="col1">
          <img
            src={require(`../assets/shoelist1.webp`)}
            alt="product 1"
            height={445}
            width={450}
          />
        </div>
        <div className="col2">
          <img
            src={require(`../assets/shoelist1.webp`)}
            alt="product 2"
            height={145}
            width={150}
          />
          <img
            src={require(`../assets/shoelist1.webp`)}
            alt="product 2"
            height={145}
            width={150}
          />
          <img
            src={require(`../assets/shoelist1.webp`)}
            alt="product 2"
            height={145}
            width={150}
          />
        </div>
        <div className="col3">
          <div className="product-header">
            <div>
              Puma
              <br />
              <span className="product-seller">by Puma Shoes</span>
            </div>
            <div className="product-ratings">Ratings</div>
            <div className="product-price">
              Rs 2000/- <br />
              <span className="product-seller">
                Get an exclusive 20% off shopping with HDFC bank
              </span>
            </div>
          </div>
          <div className="product-angles">
            <div>
              Front
              <img
                src={require(`../assets/back-arrow.webp`)}
                alt="back button"
                height={20}
                width={20}
              />
              <img
                src={require(`../assets/back-arrow.webp`)}
                alt="back button"
                height={20}
                width={20}
              />
              <img
                src={require(`../assets/back-arrow.webp`)}
                alt="back button"
                height={20}
                width={20}
              />
            </div>
            <div>
              Back
              <img
                src={require(`../assets/back-arrow.webp`)}
                alt="back button"
                height={20}
                width={20}
              />
              <img
                src={require(`../assets/back-arrow.webp`)}
                alt="back button"
                height={20}
                width={20}
              />
              <img
                src={require(`../assets/back-arrow.webp`)}
                alt="back button"
                height={20}
                width={20}
              />
            </div>
            <div>
              Middle
              <img
                src={require(`../assets/back-arrow.webp`)}
                alt="back button"
                height={20}
                width={20}
              />
              <img
                src={require(`../assets/back-arrow.webp`)}
                alt="back button"
                height={20}
                width={20}
              />
              <img
                src={require(`../assets/back-arrow.webp`)}
                alt="back button"
                height={20}
                width={20}
              />
            </div>
            <div>
              Sole
              <img
                src={require(`../assets/back-arrow.webp`)}
                alt="back button"
                height={20}
                width={20}
              />
              <img
                src={require(`../assets/back-arrow.webp`)}
                alt="back button"
                height={20}
                width={20}
              />
              <img
                src={require(`../assets/back-arrow.webp`)}
                alt="back button"
                height={20}
                width={20}
              />
            </div>
            <div>
              Size
              <button className="btn">7</button>
              <button className="btn">8</button>
              <button className="btn">9</button>
              <button className="btn">10</button>
            </div>
          </div>
        </div>
      </div>
      <div className="ppage-footer">
        <div>Rate Product</div>
        <div className="footer-buttons">
          <button className="btn">Share Design</button>
          <button className="btn-black">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
