import React from "react";
import NumbersCard from "./NumbersCard";

function NumbersSection() {
  return (
    <div className="numbers">
      <div className="bigtext">
        <h1 className="bignum">12</h1>
        <h3>Years Experience</h3>
      </div>
      <div className="small-cards">
        <div className="card-pair">
          <NumbersCard number="60+" title="Clients" />
          <NumbersCard number="08" title="Years of Experience" />
        </div>
        <div className="card-pair">
          <NumbersCard number="122+" title="Projects" />
          <NumbersCard number="10" title="Achievement" />
        </div>
      </div>
    </div>
  );
}

export default NumbersSection;
