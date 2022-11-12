import React from "react";
import list from '../datas/list.json'
import '../styles/home.css'

function Home() {
    return (
        <div className="thumb">
            {list.map((list) => (
                <div>
                <img src={list.cover} alt="" className="thumb__img" />
                
                <h2 className="thumb__title">{list.title}</h2>
                </div>
            ))}
        </div>


    )
}

export default Home