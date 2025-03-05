import React from "react";
import "../styles/CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="left-float">
        <div className="temperature-wrapper">
          <span className="icon">🌥️</span>{" "}
          <span className="temperature">9</span>{" "}
          <span className="unit">
            °C | <a href="/">F</a>
          </span>
        </div>
        <div className="feels-like">
          Feels like : <span className="blue-text">0°C</span>
        </div>
        <div className="location">Toronto, Canada</div>
      </div>
      <div>
        <ul>
          <li>Mostly Cloudy</li>
          <li>
            Humidity : <span className="blue-text">20%</span>
          </li>
          <li>
            Wind:<span className="blue-text"> 5 km/h</span>
          </li>
          <li>
            Today's Low: <span className="blue-text">-1°C</span>{" "}
          </li>
          <li>
            Today's High: <span className="blue-text">10°C</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
