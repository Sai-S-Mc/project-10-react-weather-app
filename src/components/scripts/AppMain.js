import React, { useState } from "react";
import "../styles/AppMain.css";
import axios from "axios";
import MainSearchForm from "./MainSearchForm";
import MainCurrentAndForecast from "./MainCurrentAndForecast";

export default function AppMain({ weatherData, handleApiResponse }) {
  const [city, setCity] = useState("Victoria");

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
        <MainSearchForm
          captureUserInput={captureUserInput}
          handleSubmit={handleSubmit}
        />
        <MainCurrentAndForecast weatherData={weatherData} />
      </div>
    );
  } else {
    search();

    return (
      <div className="Main">
        <MainSearchForm
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
