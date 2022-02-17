import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="row search-form">
        <div className="col-sm-6 column">
          <i className="fas fa-search"></i>
          <input type="search" className="Input" placeholder="Enter a city" />
        </div>

        <div className="col column">
          <select className="Degrees">
            <option value="celsius" className="celsius">
              Celsius
            </option>
            <option value="fahrenheit" className="fahrenheit">
              Fahrenheit
            </option>
          </select>
        </div>

        <div className="col column">
          <i className="fas fa-location-arrow"></i>
          <button type="submit" className="Current-location">
            Current
          </button>
        </div>
      </div>
    </div>
  );
}
