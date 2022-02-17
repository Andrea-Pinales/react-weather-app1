import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="row justify-content-center">
        <div className="col-2 Card">
          <img src="./images/img_partlycloudy_sm.png" alt="partlycloudy" />
          <h4>33°</h4>
          <p>Saturday 06</p>
        </div>

        <div className="col-2 Card">
          <img src="./images/img_cloudy_sm.png" alt="cloudy" />
          <h4>33°</h4>
          <p>Saturday 06</p>
        </div>

        <div className="col-2 Card">
          <img src="./images/img_rain_sm.png" alt="rain" />
          <h4>33°</h4>
          <p>Saturday 06</p>
        </div>

        <div className="col-2 Card">
          <img src="./images/img_rain_sm.png" alt="rain" />
          <h4>33°</h4>
          <p>Saturday 06</p>
        </div>

        <div className="col-2 Card">
          <img src="./images/img_partlycloudy_sm.png" alt="partlycloudy" />
          <h4>33°</h4>
          <p>Saturday 06</p>
        </div>

        <div className="col-2 Card">
          <img src="./images/img_sunny_sm.png" alt="sunny" />
          <h4>33°</h4>
          <p>Saturday 06</p>
        </div>
      </div>
    </div>
  );
}
