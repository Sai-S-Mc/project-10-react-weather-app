import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay({ forecastData }) {

  let date = new Date(forecastData.timestamp * 1000);
  console.log(date);
  return (
    <div className="col-md">
      <div className="daily-forecast">
        Mon
        <br />
        <br />
        <WeatherIcon iconName={forecastData.icon} size={50} />
        <br />
        <br />
        <div className="daily-high-low">
          <strong>{forecastData.maxTemperature}° </strong>
          {forecastData.minTemperature}°
        </div>
      </div>
    </div>
  );
}
