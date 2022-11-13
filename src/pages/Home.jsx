import React from "react";
import list from '../datas/list.json'
import '../styles/home.css'

function Home() {
    return (
    
        <div className="card">
            {list.map((list) => (
                <div class= "thumb">
                <img className= "thumb--img" src={list.cover} alt="" />
                <h2 className="thumb--title">{list.title}</h2>
                </div>
            ))}
        </div>
   

    )
}

export default Home