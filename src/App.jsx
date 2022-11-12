//react Framework
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//style by Sass Partials
import "./main.css";

//pages by React BrowserRouter
import Home from "./pages/Home";
import About from "./pages/About";


//components Header && Footer

import Footer from "./compoments/Footer";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            
            <Route path="/kaza" element={<Navigate to="/" replace />} />
            
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;