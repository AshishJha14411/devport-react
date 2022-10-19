import React from "react";

function Card({image,heading,desc,isMid}) {
  return (
    <div className={`card ${isMid ? "mid" : ""}`}>
      <div className="card-img">
        <img src={image} draggable="false" alt="tab" />
      </div>
      <div className="textcard">
        <h2 className="card-head">{heading}</h2>
        <p className="card-des">{desc}
        </p>
        <div className="link">
          <a href="#" className={`know-more ${isMid ? "mid" : ""}`}>
            KNOW MORE
          </a>
          <div className={`${isMid ? "arrow-mid" : "arrow"}`}></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
