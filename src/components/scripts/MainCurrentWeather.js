import React from "react";
import "../styles/MainCurrentWeather.css";
import WeatherIcon from "./WeatherIcon";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayTemperature from "./DisplayTemperature";

export default function MainCurrentWeather({
  weather,
  forecastToday,
  unit,
  showCelsius,
  showFahrenheit,
}) {
  let tempMinMaxTag;
  let dateTag;

  function dateDisplay() {
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
    return `${day}, ${month} ${date}`;
  }

  if (forecastToday) {
    tempMinMaxTag = (
      <>
        <li>
          Today's Low:{" "}
          <DisplayTemperature
            unit="metric"
            temp={forecastToday.temperature.minimum}
          />
        </li>
        <li>
          Today's High:{" "}
          <DisplayTemperature
            unit="metric"
            temp={forecastToday.temperature.maximum}
          />
        </li>
      </>
    );

    dateTag = (
      <li>
        <em>{dateDisplay()}</em>
      </li>
    );
  }

  let celsiusTag = (
    <span className="unit">
      °C | <span className="blue-text">°</span>
      <a
        href="/"
        title="Change to Imperial unit system (Fahrenheit, miles/h)"
        className="blue-text"
        onClick={showFahrenheit}
      >
        F
      </a>
    </span>
  );

  let fahrenheitTag = (
    <span className="unit">
      °F | <span className="blue-text">°</span>
      <a
        href="/"
        title="Change to Metric unit system (Celsius, km/h)"
        className="blue-text"
        onClick={showCelsius}
      >
        C
      </a>{" "}
    </span>
  );

  return (
    <div className="CurrentWeather">
      <div className="container-fluid left-float">
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
          <div className="mt-3 country">{weather.country}</div>
        </div>
        <div className="text-center location">{weather.city}</div>
      </div>
      <div className="container-fluid right-float">
        <ul className="mb-0 p-3">
          {dateTag}
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
          {tempMinMaxTag}
        </ul>
      </div>
    </div>
  );
}
