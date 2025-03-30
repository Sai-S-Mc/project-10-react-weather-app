import React, { useState } from "react";
import "../styles/Main.css";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import axios from "axios";
import SearchForm from "./SearchForm";

export default function Main({ weatherData, handleApiResponse }) {
  const [city, setCity] = useState("Iqaluit");
  const [forecastApiResponse, setForecastApiResponse] = useState(false);
  const [forecastArray, setForecastArray] = useState(null);
  const [forecastTemp, setForecastTemp] = useState(null);

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
          <CurrentWeather weather={weatherData} forecastTemp={forecastTemp} />
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

  function search() {
    let apiKey = "tbfob32e017e01391b34fe15b81ad2a6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleApiResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function captureUserInput(event) {
    let userInput = event.target.value;
    setCity(userInput);
  }

  if (weatherData.apiResponse) {
    return (
      <div className="Main">
        <SearchForm
          captureUserInput={captureUserInput}
          handleSubmit={handleSubmit}
        />
        {forecastAPI()}
      </div>
    );
  } else {
    search();

    return (
      <div className="Main">
        <SearchForm
          captureUserInput={captureUserInput}
          handleSubmit={handleSubmit}
        />
        <div className="text-center pb-3 pt-3 loading">
          Loading weather for {city}
        </div>
      </div>
    );
  }
}
