import React, { useEffect, useState } from "react";
import MainCurrentWeather from "./MainCurrentWeather";
import MainForecast from "./MainForecast";
import axios from "axios";
import ErrorHandler from "./ErrorHandler";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MainCurrentAndForecast({ weatherData }) {
  const [forecast, setForecast] = useState({
    apiResponse: false,
  });
  const [unit, setUnit] = useState("metric");
  const [error, setError] = useState({
    status: false,
  });

  useEffect(() => {
    setForecast({
      apiResponse: false,
    });
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
    setForecast({
      apiResponse: true,
      future: response.data.daily,
      today: response.data.daily[0],
    });
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

  function makeForecastApiCall() {
    let apiKey = "tbfob32e017e01391b34fe15b81ad2a6";
    let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${weatherData.city}&key=${apiKey}`;
    axios
      .get(forecastApiUrl)
      .then(handleForecastApiResponse)
      .catch(handleApiError);
  }

  function forecastDisplay() {
    let forecastSection;
    if (!error.status) {
      if (forecast.apiResponse) {
        forecastSection = (
          <MainForecast
            forecastApiResponse={forecast.apiResponse}
            forecastArray={forecast.future}
            unit={unit}
          />
        );
      } else {
        makeForecastApiCall();

        forecastSection = (
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
      forecastSection = (
        <div className="Forecast ps-0 pe-0">
          <br />
          <br />
          <div className="text-center p-5 error-message">
            <ErrorHandler
              updateErrorStatus={updateErrorStatus}
              errorType={error.type}
              weatherType="forecast"
            />
          </div>
          <br />
          <br />
        </div>
      );
    }
    return forecastSection;
  }

  return (
    <>
      <MainCurrentWeather
        weather={weatherData}
        forecastToday={forecast.today}
        unit={unit}
        showCelsius={showCelsius}
        showFahrenheit={showFahrenheit}
      />
      {forecastDisplay()}
    </>
  );
}
