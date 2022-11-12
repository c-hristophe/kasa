import React from "react";
import Banner from "../compoments/Banner";
import list from '../datas/list.json'
import Collapse from "../compoments/Collapse";
import banner from "../images/banner.png";

const About = () => {
  // Switch to display content in the dropdown by title
  const content = (title) => {
    switch (title) {
      case "fiability":
        return list.fiability;
      case "respect":
        return list.respect;
      case "service":
        return list.service;
      case "sécurity":
        return list.security;
      default:
        console.log("default");
        break;
    }
  };

  return (
    <div className="about">
      <Banner image={banner} />
      <div className="about__dropdowns">
        <Collapse title="fiabilité" content={content("fiability")} />
        <Collapse title="respect" content={content("respect")} />
        <Collapse title="service" content={content("service")} />
        <Collapse title="sécurité" content={content("sécurity")} />
      </div>
    </div>
  );
};

export default About;