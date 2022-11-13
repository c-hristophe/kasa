import React from "react";
import '../styles/Banner.css';
import image from "../images/banner.png";


function Banner() {
  

  return (
    <div className="banner">
      <img className="banner__img"src={image} alt=""/>
      <p className="banner__text">
        Chez nous, partout et ailleurs
      </p>
    </div>
  );
}

export default Banner;