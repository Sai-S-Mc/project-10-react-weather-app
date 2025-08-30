import React from "react";
import WeatherIcon from "./WeatherIcon";
import DisplayTemperature from "./DisplayTemperature";

export default function ForecastDay({ forecastDailyData, unit }) {
  let date = new Date(forecastDailyData.time * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];

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
          <strong>
            {" "}
            <DisplayTemperature
              temp={forecastDailyData.temperature.maximum}
              unit={unit}
              displayUnit = {false}
            />
          </strong>
          <DisplayTemperature
            temp={forecastDailyData.temperature.minimum}
            unit={unit}
            displayUnit = {false}
          />
        </div>
      </div>
    </div>
  );
}
