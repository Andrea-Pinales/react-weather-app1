import React from "react";
import Forecast from "./Forecast";
import "./Current.css";

export default function Current() {
  return (
    <div className="Current">
      <div className="row city-date">
        <h2>Los Angeles</h2>
        <h3>Date | Month, Day | Hr:Min</h3>
      </div>

      <div class="row current-weather">
        <div class="col">
          <h1>26°</h1>
          <img
            src="./images/img_partlycloudy_lg.png"
            alt="partlycloudy-lg"
            className="partly-cloudy-lg"
          />
        </div>
      </div>

      <div class="row justify-content-center high-low">
        <div class="col-2">
          <h3>H:33°</h3>
        </div>

        <div class="col-2">
          <h3>L:33°</h3>
        </div>
      </div>
      <Forecast />
    </div>
  );
}
