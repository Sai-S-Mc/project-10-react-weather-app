import React, { useState } from "react";
import "../styles/CurrentWeather.css";
import CurrentWeatherIcon from "./CurrentWeatherIcon";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CurrentWeather({ weather }) {
  let metric = {
    temperature: Math.round(weather.temperature),
    feelsLike: Math.round(weather.realFeel) + " °C",
    wind: Math.round(weather.windSpeed * 3.6) + " km/h",
  };

  let imperial = {
    temperature: Math.round((weather.temperature * 9) / 5 + 32),
    feelsLike: Math.round((weather.realFeel * 9) / 5 + 32) + " °F",
    wind: Math.round(weather.windSpeed * 2.237) + " miles/h",
  };

  let celsiusUnitTag = (
    <span className="unit">
      °C | °
      <a href="/" onClick={showFahrenheit}>
        F
      </a>
    </span>
  );

  let fahrenheitUnitTag = (
    <span className="unit">
      °
      <a href="/" onClick={showCelsius}>
        C
      </a>{" "}
      | °F
    </span>
  );

  const [unitElement, setUnitElement] = useState(celsiusUnitTag);
  const [weatherData, setWeatherData] = useState(metric);

  function showFahrenheit(event) {
    event.preventDefault();
    setWeatherData(imperial);
    setUnitElement(fahrenheitUnitTag);
  }

  function showCelsius(event) {
    event.preventDefault();
    setWeatherData(metric);
    setUnitElement(celsiusUnitTag);
  }

  return (
    <div className="CurrentWeather">
      <div className="left-float">
        <div className="temperature-wrapper">
          <span className="icon">
            <CurrentWeatherIcon iconName={weather.icon} />
          </span>{" "}
          <span className="temperature">{weatherData.temperature}</span>{" "}
          {unitElement}
        </div>
        <div className="text-center">
          <div>
            Feels like :{" "}
            <span className="bluish-grey-text">{weatherData.feelsLike}</span>
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
            <span className="bluish-grey-text"> {weatherData.wind}</span>
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
