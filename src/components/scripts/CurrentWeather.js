import React, { useState } from "react";
import "../styles/CurrentWeather.css";
import WeatherIcon from "./WeatherIcon";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CurrentWeather({ weather, forecastTemp }) {
  const [unit, setUnit] = useState("metric");

  console.log(forecastTemp);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  let celsiusTag = (
    <span className="unit">
      °C | °
      <a href="/" onClick={showFahrenheit}>
        F
      </a>
    </span>
  );

  let fahrenheitTag = (
    <span className="unit">
      °
      <a href="/" onClick={showCelsius}>
        C
      </a>{" "}
      | °F
    </span>
  );

  return (
    <div className="CurrentWeather">
      <div className="left-float">
        <div className="temperature-wrapper">
          <span className="icon">
            <WeatherIcon iconName={weather.icon} size={60} />
          </span>{" "}
          <span className="temperature">
            {unit === "metric"
              ? Math.round(weather.temperature)
              : Math.round((weather.temperature * 9) / 5 + 32)}
          </span>{" "}
          {unit === "metric" ? celsiusTag : fahrenheitTag}
        </div>
        <div className="text-center">
          <div>
            Feels like :{" "}
            <span className="bluish-grey-text">
              {unit === "metric"
                ? Math.round(weather.realFeel) + " °C"
                : Math.round((weather.realFeel * 9) / 5 + 32) + " °F"}
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
            Wind:{" "}
            <span className="bluish-grey-text">
              {unit === "metric"
                ? Math.round(weather.windSpeed * 3.6) + " km/h"
                : Math.round(weather.windSpeed * 2.237) + " miles/h"}
            </span>
          </li>
          <li>
            Today's Low:{" "}
            <span className="bluish-grey-text">
              {unit === "metric"
                ? Math.round(forecastTemp.minimum) + " °C"
                : Math.round((forecastTemp.minimum * 9) / 5 + 32) + " °F"}
            </span>{" "}
          </li>
          <li>
            Today's High:{" "}
            <span className="bluish-grey-text">
              {unit === "metric"
                ? Math.round(forecastTemp.maximum) + " °C"
                : Math.round((forecastTemp.maximum * 9) / 5 + 32) + " °F"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
