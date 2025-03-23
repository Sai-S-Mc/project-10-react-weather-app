import React from "react";
import "../styles/CurrentWeather.css";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CurrentWeather({weather}) {
  
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
          <span className="temperature">{Math.round(weather.temperature)}</span>{" "}
          <span className="unit">
            °C | <a href="/">F</a>
          </span>
        </div>
        <div className="text-center">
          Feels like : <span className="bluish-grey-text">{Math.round(weather.realFeel)}°C</span>
        </div>
        <div className="text-center location">{weather.city}</div>
      </div>
      <div>
        <ul className="mb-0 ps-1rem">
          <li className="text-capitalize">{weather.description}</li>
          <li>
            Humidity : <span className="bluish-grey-text">{Math.round(weather.humidity)}%</span>
          </li>
          <li>
            Wind:<span className="bluish-grey-text"> {Math.round(weather.windSpeed)} km/h</span>
          </li>
          <li>
            Today's Low: <span className="bluish-grey-text">-1°C</span>{" "}
          </li>
          <li>
            Today's High: <span className="bluish-grey-text">10°C</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
