import React, { useState } from "react";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <div className="row search-form">
        <div className="col-sm-6 column">
          <i className="fas fa-search"></i>
          <input
            type="search"
            className="Input"
            placeholder="Enter a city"
            onChange={handleCityChange}
          />
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
