import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import "./main.css";
import Home from "./pages/Home";
import Navbar from "./compoments/Navbar";
import Footer from "./compoments/Footer";
import Banner from "./compoments/Banner";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
        <Navbar />
        <Banner />
          <Routes>
            <Route index element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;