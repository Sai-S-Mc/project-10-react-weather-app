import React, { useState } from "react";
import "../styles/CurrentWeather.css";
import CurrentWeatherIcon from "./CurrentWeatherIcon";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CurrentWeather({ weather }) {
  const [unit, setUnit] = useState("metric");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <div className="CurrentWeather">
        <div className="left-float">
          <div className="temperature-wrapper">
            <span className="icon">
              <CurrentWeatherIcon iconName={weather.icon} />
            </span>{" "}
            <span className="temperature">
              {Math.round(weather.temperature)}
            </span>{" "}
            <span className="unit">
              °C | °
              <a href="/" onClick={showFahrenheit}>
                F
              </a>
            </span>
          </div>
          <div className="text-center">
            <div>
              Feels like :{" "}
              <span className="bluish-grey-text">
                {Math.round(weather.realFeel)} °C
              </span>
            </div>
            <div className="mt-3">{weather.country}</div>
          </div>
          <div className="text-center location">{weather.city}</div>
        </div>
        <div>
          <ul className="mb-0 ps-1rem">
            <li className="text-capitalize">{weather.description}</li>
            <li>
              Humidity :{" "}
              <span className="bluish-grey-text">
                {Math.round(weather.humidity)}%
              </span>
            </li>
            <li>
              Wind:
              <span className="bluish-grey-text">
                {" "}
                {Math.round(weather.windSpeed * 3.6)} km/h
              </span>
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
  } else {
    return (
      <div className="CurrentWeather">
        <div className="left-float">
          <div className="temperature-wrapper">
            <span className="icon">
              <CurrentWeatherIcon iconName={weather.icon} />
            </span>{" "}
            <span className="temperature">
              {Math.round((weather.temperature * 9) / 5 + 32)}
            </span>{" "}
            <span className="unit">
              °
              <a href="/" onClick={showCelsius}>
                C
              </a>{" "}
              | °F
            </span>
          </div>
          <div className="text-center">
            <div>
              Feels like :{" "}
              <span className="bluish-grey-text">
                {Math.round((weather.realFeel * 9) / 5 + 32)} °F
              </span>
            </div>
            <div className="mt-3">{weather.country}</div>
          </div>
          <div className="text-center location">{weather.city}</div>
        </div>
        <div>
          <ul className="mb-0 ps-1rem">
            <li className="text-capitalize">{weather.description}</li>
            <li>
              Humidity :{" "}
              <span className="bluish-grey-text">
                {Math.round(weather.humidity)}%
              </span>
            </li>
            <li>
              Wind:
              <span className="bluish-grey-text">
                {" "}
                {Math.round(weather.windSpeed * 2.237)} miles/h
              </span>
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
}
