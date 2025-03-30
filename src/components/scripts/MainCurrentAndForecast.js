import React, { useEffect, useState } from "react";
import MainCurrentWeather from "./MainCurrentWeather";
import MainForecast from "./MainForecast";
import axios from "axios";

export default function MainCurrentAndForecast({ weatherData }) {
  const [forecastApiResponse, setForecastApiResponse] = useState(false);
  const [forecastArray, setForecastArray] = useState(null);
  const [forecastToday, setForecastToday] = useState(null);
  const [unit, setUnit] = useState("metric");

  useEffect(() => {
    setForecastApiResponse(false);
  }, [weatherData.city]);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function handleForecastApiResponse(response) {
    console.log(response.data);
    setForecastApiResponse(true);
    setForecastArray(response.data.daily);
    setForecastToday(response.data.daily[0]);
  }

  if (forecastApiResponse) {
    console.log("executing forecastApiResponse is true statement");
    return (
      <>
        <MainCurrentWeather
          weather={weatherData}
          forecastToday ={forecastToday}
          unit={unit}
          showCelsius={showCelsius}
          showFahrenheit={showFahrenheit}
        />
        <MainForecast
          forecastApiResponse={forecastApiResponse}
          forecastArray={forecastArray}
          unit={unit}
        />
      </>
    );
  } else {
    console.log("executing forecastApiResponse is false statement");
    let apiKey = "tbfob32e017e01391b34fe15b81ad2a6";
    let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${weatherData.city}&key=${apiKey}`;
    axios.get(forecastApiUrl).then(handleForecastApiResponse);

    return (
      <div className="text-center Forecast">
        Loading forecast for {weatherData.city}...
      </div>
    );
  }
}
