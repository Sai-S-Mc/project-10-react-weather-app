import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay({ forecastDailyData, unit }) {
  let date = new Date(forecastDailyData.time * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];

  function forecastDailyMax() {
    if (unit === "metric") {
      let max = `${Math.round(forecastDailyData.temperature.maximum)} °C `;
      return max;
    } else {
      let max = `${Math.round(
        (forecastDailyData.temperature.maximum * 9) / 5 + 32
      )} °F `;
      return max;
    }
  }
  function forecastDailyMin() {
    if (unit === "metric") {
      let min = `${Math.round(forecastDailyData.temperature.minimum)} °C `;
      return min;
    } else {
      let min = `${Math.round(
        (forecastDailyData.temperature.minimum * 9) / 5 + 32
      )} °F `;
      return min;
    }
  }

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
          <strong>{forecastDailyMax()} </strong>
          {forecastDailyMin()}
        </div>
      </div>
    </div>
  );
}
