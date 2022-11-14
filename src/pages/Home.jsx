import React from "react";
import list from '../datas/list.json'
import '../styles/home.css'
import Banner from "../compoments/Banner";
import { Link } from "react-router-dom";



function Home() {
    return (
        <div className="App">
            <Banner />

        <div className="card">
            
            {list.map((list) => (
                
                <div class= "thumb">
                    <Link to={`/products/${list.id}`}>
                        <img className= "thumb--img" src={list.cover} alt="" />
                        <h2 className="thumb--title">{list.title}</h2>
                    </Link>
                </div>
                
            ))}
        </div>
        </div>
   

    )
}

export default Home