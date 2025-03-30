import React from "react";
import "../styles/CurrentWeather.css";
import WeatherIcon from "./WeatherIcon";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CurrentWeather({
  weather,
  forecastToday,
  unit,
  showCelsius,
  showFahrenheit,
}) {
  let fullDate = new Date(forecastToday.time * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[fullDate.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[fullDate.getMonth()];

  let date = fullDate.getDate();
  let dateDisplay = `${day}, ${month} ${date}`;

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
          <li>
            <em>{dateDisplay}</em>
          </li>
          <li className="pt-2 text-capitalize">{weather.description}</li>
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
                ? Math.round(forecastToday.temperature.minimum) + " °C"
                : Math.round((forecastToday.temperature.minimum * 9) / 5 + 32) +
                  " °F"}
            </span>{" "}
          </li>
          <li>
            Today's High:{" "}
            <span className="bluish-grey-text">
              {unit === "metric"
                ? Math.round(forecastToday.temperature.maximum) + " °C"
                : Math.round((forecastToday.temperature.maximum * 9) / 5 + 32) +
                  " °F"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
