import React, { useState } from "react";
import "../styles/Forecast.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast({ city }) {
  const [apiResponse, setApiResponse] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleApiResponse(response) {
    console.log("handling api response");
    console.log(response.data);
    setApiResponse(true);

    setForecastData(response.data.daily);

    // setForecastData({
    //   apiResponse: true,
    //   maxTemperature: Math.round(response.data.daily[0].temperature.maximum),
    //   minTemperature: Math.round(response.data.daily[0].temperature.minimum),
    //   timestamp: response.data.daily[0].time,
    //   icon: response.data.daily[0].condition.icon,
    // });
  }

  if (apiResponse) {
    console.log(forecastData);
    return (
      <div className="Forecast">
        <div className="row">
          {forecastData.map((forecastDay, index) => {
            if (index > 0 && index < 6)
              return (
                <ForecastDay key={index} forecastDailyData={forecastDay} />
              );
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "tbfob32e017e01391b34fe15b81ad2a6";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleApiResponse);

    return (
      <div className="text-center Forecast">Loading forecast for {city}...</div>
    );
  }
}
