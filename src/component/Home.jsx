import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img
          src="assets/fs.jpg"
          class="card-img"
          alt="Background"
          height="650"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-border mb-0">FASHION WORLD</h5>
            <p class="card-text lead fs-2">
              Change your fashion Life
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}
