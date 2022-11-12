import React from "react"
import { BrowserRouter as NavLink } from "react-router-dom";
import Logo from "../images/banner.png"
import '../styles/navbar.css'

const Navbar = () => (
  <nav className="navbar">
    
    <ul className="navbar--link">
        <li><NavLink to="/">Accueil</NavLink></li>
		<li><NavLink to="/about">A propos</NavLink></li>
    </ul>
    <div className="navbar--logo">
      <img src={Logo} alt="logo" className="navbar--logo" />
    
    </div>
  </nav>
)
export default Navbar