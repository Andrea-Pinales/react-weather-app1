import React from "react";
import "./Search.css";

export default function Search(props) {
  return (
    <div className="Search">
      <div className="row search-form">
        <form>
          <div className="col-6 column">
            {/* <i className="fas fa-search"></i> */}
            <input type="search" className="Input" placeholder="Enter a city" />
          </div>
          <div className="col-3 column">
            <input type="submit" value="Search" className="SearchButton" />
          </div>
          <div className="col-3 column">
            {/* <i className="fas fa-location-arrow"></i> */}
            <button type="submit" className="CurrentLocation">
              Current
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
