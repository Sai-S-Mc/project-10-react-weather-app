import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import axios from "axios";

export default function MainCurrentAndForecast({ city, weatherData }) {
  const [forecastApiResponse, setForecastApiResponse] = useState(false);
  const [forecastArray, setForecastArray] = useState(null);
  const [forecastTemp, setForecastTemp] = useState(null);
  const [unit, setUnit] = useState("metric");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function handleForecastApiResponse(response) {
    console.log("handling api response");
    console.log(response.data);
    setForecastApiResponse(true);
    setForecastArray(response.data.daily);
    setForecastTemp(response.data.daily[0].temperature);
  }

  function forecastAPI() {
    if (forecastApiResponse) {
      return (
        <>
          <CurrentWeather
            weather={weatherData}
            forecastTemp={forecastTemp}
            unit={unit}
            showCelsius={showCelsius}
            showFahrenheit={showFahrenheit}
          />
          <Forecast
            forecastApiResponse={forecastApiResponse}
            forecastArray={forecastArray}
          />
        </>
      );
    } else {
      let apiKey = "tbfob32e017e01391b34fe15b81ad2a6";
      let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
      axios.get(forecastApiUrl).then(handleForecastApiResponse);

      return (
        <div className="text-center Forecast">
          Loading forecast for {city}...
        </div>
      );
    }
  }

  return <> {forecastAPI()}</>;
}
