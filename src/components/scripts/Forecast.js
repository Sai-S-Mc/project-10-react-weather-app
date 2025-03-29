import React from "react";
import "../styles/Forecast.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ForecastDay from "./ForecastDay";

export default function Forecast({ forecastArray, forecastApiResponse }) {
  if (forecastApiResponse) {
    console.log(forecastArray);
    return (
      <div className="Forecast">
        <div className="row">
          {forecastArray.map((forecastDay, index) => {
            if (index > 0 && index < 6)
              return (
                <ForecastDay key={index} forecastDailyData={forecastDay} />
              );
            return null;
          })}
        </div>
      </div>
    );
  }
}
