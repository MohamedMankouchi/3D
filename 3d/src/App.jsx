import { useState } from "react";
import "./App.css";

import { Link } from "react-router-dom";

import AppleWatch from "./images/applewatch.png";
import Macbook from "./images/macbook.png";
import Iphone from "./images/iphone15.png";
const cards = [
  {
    title: "Apple Watch Ultra 2",
    image: AppleWatch,
    link: "applewatch",
  },
  {
    title: "Macbook Pro",
    image: Macbook,
    link: "macbook",
  },
  {
    title: "Iphone 15",
    image: Iphone,
    link: "iphone",
  },
];
function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>3D Apple store</h1>

      <div className="container">
        {cards.map((el) => (
          <div className="cards">
            <div className="cards-image">
              <img src={el.image} />
            </div>
            <div className="cards-title">
              <h1 style={{ fontSize: "30px" }}>{el.title}</h1>
            </div>
            <div className="cards-button">
              <Link to={`https://threed-applestore.onrender.com/${el.link}`}>
                <button>View</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
