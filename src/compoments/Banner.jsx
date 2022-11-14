import React from "react";
import '../styles/Banner.css';

const Banner = ({ image, text }) => {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner__img" />
      
      {text ? <h1 className="banner__text">{text}</h1> : null}
    </div>
  );
};

export default Banner;