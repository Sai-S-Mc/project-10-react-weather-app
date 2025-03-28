import React, { useState } from "react";
import "../styles/Forecast.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast({ city }) {
  const [forecastData, setForecastData] = useState({ apiResponse: false });
  
  function handleApiResponse(response) {
    console.log("handling api response");
    console.log(response.data);
    setForecastData({
      apiResponse: true,
      maxTemperature: Math.round(response.data.daily[0].temperature.maximum),
      minTemperature: Math.round(response.data.daily[0].temperature.minimum),
      timestamp: response.data.daily[0].time,
      icon: response.data.daily[0].condition.icon,
    });
  }

  if (forecastData.apiResponse) {
    console.log(forecastData.apiResponse);
    return (
      <div className="Forecast">
        <div className="row">
          <ForecastDay forecastData={forecastData} />
        </div>
      </div>
    );
  } else {
    console.log(forecastData.apiResponse);
    let apiKey = "tbfob32e017e01391b34fe15b81ad2a6";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleApiResponse);

    return (
      <div className="text-center Forecast">Loading forecast for {city}...</div>
    );
  }
}
