import React from "react";
import "../styles/CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="left-float">
        <div className="temperature-wrapper">
          <span className="icon">🌥️</span>{" "}
          <span className="temperature">9</span>{" "}
          <span className="unit">°C | F</span>
        </div>
        <div className="feels-like">Feels like : 0°C</div>
        <div className="location">Toronto, Canada</div>
      </div>
      <div>
        <ul>
          <li>Mostly Cloudy</li>
          <li>Humidity : 20%</li>
          <li>Wind: 5 km/h</li>
          <li>Today's Low: -1°C</li>
          <li>Today's High: 10°C</li>
        </ul>
      </div>
    </div>
  );
}
