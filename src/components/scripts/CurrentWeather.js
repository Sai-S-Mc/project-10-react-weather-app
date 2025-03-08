import React from "react";
import "../styles/CurrentWeather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="left-float">
        <div className="temperature-wrapper">
          <span className="icon">
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"#6090E7"}
              size={60}
              animate={true}
            />
          </span>{" "}
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
        <ul className="mb-0 ps-1rem">
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
