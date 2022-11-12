import React from "react";
import { Link } from "react-router-dom";


import products from "../data/list";


import Thumbnails from "../components/Thumbnails";



const Products = () => {
  return (
    <div className="home">
   
      <section className="home__products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Thumbnails image={product.cover} title={product.title} />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Products;