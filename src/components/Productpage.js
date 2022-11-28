import React from 'react'
import { Link } from 'react-router-dom'

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
        your design space
      </div>
      <div className="ppage-grid"></div>
      <div className="ppage-footer"></div>
    </div>
  )
}
