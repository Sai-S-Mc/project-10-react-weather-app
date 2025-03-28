import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay({ forecastDailyData }) {
  
  let date = new Date(forecastDailyData.time * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];
  console.log(day);

  return (
    <div className="col-md">
      <div className="daily-forecast">
        {day}
        <br />
        <br />
        <WeatherIcon iconName={forecastDailyData.condition.icon} size={50} />
        <br />
        <br />
        <div className="daily-high-low">
          <strong>{Math.round(forecastDailyData.temperature.maximum)}° </strong>
          {Math.round(forecastDailyData.temperature.minimum)}°
        </div>
      </div>
    </div>
  );
}
