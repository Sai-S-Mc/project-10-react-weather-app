import React, { useEffect, useState } from "react";
import MainCurrentWeather from "./MainCurrentWeather";
import MainForecast from "./MainForecast";
import axios from "axios";
import ErrorHandler from "./ErrorHandler";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MainCurrentAndForecast({ weatherData }) {
  const [forecastApiResponse, setForecastApiResponse] = useState(false);
  const [forecastArray, setForecastArray] = useState(null);
  const [forecastToday, setForecastToday] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [error, setError] = useState({
    status: false,
  });

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
    setForecastApiResponse(true);
    setForecastArray(response.data.daily);
    setForecastToday(response.data.daily[0]);
  }

  function handleApiError() {
    setError({
      status: true,
      type: "api",
    });
  }

  function updateErrorStatus() {
    setError({
      status: false,
    });
  }

  let forecastDisplay;

  if (!error.status) {
    if (forecastApiResponse) {
      forecastDisplay = (
        <MainForecast
          forecastApiResponse={forecastApiResponse}
          forecastArray={forecastArray}
          unit={unit}
        />
      );
    } else {
      forecastDisplay = (
        <div className="Forecast ps-0 pe-0">
          <br />
          <br />
          <div className="text-center p-5 loading">
            Loading forecast for {weatherData.city}...
          </div>
          <br />
          <br />
        </div>
      );
    }
  } else {
    forecastDisplay = (
      <div className="Forecast ps-0 pe-0">
        <br />
        <br />
        <div className="text-center p-5 error-message">
          <ErrorHandler
            updateErrorStatus={updateErrorStatus}
            errorType={error.type}
          />
        </div>
        <br />
        <br />
      </div>
    );
  }

  if (forecastApiResponse) {
    return (
      <>
        <MainCurrentWeather
          weather={weatherData}
          forecastToday={forecastToday}
          unit={unit}
          showCelsius={showCelsius}
          showFahrenheit={showFahrenheit}
        />
        {forecastDisplay}
      </>
    );
  } else {
    let apiKey = "tbfob32e017e01391b34fe15b81ad2a6";
    let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${weatherData.city}&key=${apiKey}`;
    // let forecastApiUrl = `https://api.shcodes.io/weather/v1/forecast?query=${weatherData.city}&key=${apiKey}`;
    axios
      .get(forecastApiUrl)
      .then(handleForecastApiResponse)
      .catch(handleApiError);

    return (
      <>
        <MainCurrentWeather
          weather={weatherData}
          forecastToday={forecastToday}
          unit={unit}
          showCelsius={showCelsius}
          showFahrenheit={showFahrenheit}
        />
        {forecastDisplay}
      </>
    );
  }
}
