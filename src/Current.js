import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import "./Current.css";

export default function Current(props) {
  const [temperature, setTemperature] = useState(null);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Saturday | February, 19 | 03:24",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Current">
        <div className="row city-date">
          <h2>{weatherData.city}</h2>
          <h3>{weatherData.date}</h3>
        </div>

        <div class="row current-weather">
          <div class="col">
            <h1>{Math.round(weatherData.temperature)}°</h1>
            <img
              src="./images/img_partlycloudy_lg.png"
              alt="partlycloudy-lg"
              className="Icons"
            />
          </div>
          <span className="text-capitalize">{weatherData.description}</span>
        </div>

        <div class="row justify-content-center high-low">
          <div class="col-2">
            <h3>H: {Math.round(weatherData.high)}°</h3>
          </div>

          <div class="col-2">
            <h3>L: {Math.round(weatherData.low)}°</h3>
          </div>
        </div>
        <Forecast />
      </div>
    );
  } else {
    const apiKey = "1d016b2c6f287c8ba67f95b2a66be332";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
