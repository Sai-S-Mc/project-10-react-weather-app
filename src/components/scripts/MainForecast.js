import React from "react";
import "../styles/MainForecast.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ForecastDay from "./ForecastDay";

export default function MainForecast({ forecastArray, forecastApiResponse, unit }) {
  if (forecastApiResponse) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecastArray.map((forecastDay, index) => {
            if (index > 0 && index < 6)
              return (
                <ForecastDay
                  key={index}
                  forecastDailyData={forecastDay}
                  unit={unit}
                />
              );
            return null;
          })}
        </div>
      </div>
    );
  }
}
