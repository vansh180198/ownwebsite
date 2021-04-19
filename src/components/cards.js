import React from "react";
import CardItem from "./CardItem";
import src9 from "../images/img-9.jpg";
import src2 from "../images/img-2.jpg";
import src3 from "../images/img-3.jpg";
import src4 from "../images/img-4.jpg";
import src8 from "../images/img-8.jpg";
import "./cards.css";
function cards() {
  return (
    <div className="cards">
      <div className="cards-container">
        <h1 id="heading">Check out these epic destinations</h1>
        <div className="cards-wrapper">
          <ul className="cards-items">
            <div className="container-1">
              <CardItem
                src={src8}
                text="Lush Green Fields of Pahalgam"
                label="Leisure"
                path="/pahalgam"
              />
              <CardItem
                src={src9}
                text="Snowy Gulmarg"
                label="Adventure"
                path="/gulmarg"
              />
              <CardItem
                src={src2}
                text="War grounds of Kargil"
                label="Adventure"
                path="/kargil"
              />
            </div>
            <div className="container-2">
              <CardItem
                src={src3}
                text="Cold Desert of Ladakh"
                label="Climatic"
                path="/ladakh"
              />
              <CardItem
                src={src4}
                text="Temple of Mata Vaishno Devi"
                label="Religious"
                path="/vaishnodevi"
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default cards;
