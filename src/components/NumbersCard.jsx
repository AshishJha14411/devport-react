import React from "react";

function NumbersCard({ number, title }) {
  return (
    <div className="small-card">
      <h2 className="num">{number}</h2>
      <p className="num-des">{title}</p>
    </div>
  );
}

export default NumbersCard;
