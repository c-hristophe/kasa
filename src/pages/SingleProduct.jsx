import React from "react";
import { useParams } from "react-router-dom";
import list from "../datas/list.json";
import '../styles/singleproduct.css'
import Tags from "../compoments/Tags"
import Slider from "../compoments/Slider";
import Collapse from "../compoments/Collapse"

const SingleProduct = () => {
  const { productId } = useParams();
  const product = list.find((product) => product.id === productId);
  const { equipments, description,title, location, pictures } = product;

  return (
    <div className="singleproduct">
      <Slider slides={pictures} />
      <h1 className="singleproduct__title">{title}</h1>
          <p className="singleproduct__location">{location}</p>
          <div className="singleproduct__tags">
            {product.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
          <div className="singleproduct__dropdowns">
        <Collapse title="description" content={description} />
        <Collapse title="équipement" content={equipments} />
      </div>
    </div>
  );
};

export default SingleProduct;