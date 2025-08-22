import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AppMain.css";
import axios from "axios";
import MainSearchForm from "./MainSearchForm";
import MainCurrentAndForecast from "./MainCurrentAndForecast";

export default function AppMain({
  weatherData,
  handleApiResponse,
  errorStatus,
  updateErrorStatus,
}) {
  const [city, setCity] = useState("Victoria");

  function search() {
    let apiKey = "tbfob32e017e01391b34fe15b81ad2a6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleApiResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (city === "") {
      alert("Spacebar is not a city yet🚀!");
    } else {
      search();
    }
  }

  function captureUserInput(event) {
    let userInput = event.target.value.trim();
    setCity(userInput);
  }

  if (errorStatus === false) {
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
          <br />
          <br />
        </div>
      );
    }
  } else {
    return (
      <div className="Main">
        <br />
        <br />
        <div className="text-center p-5 error-message">
          <p>
            You searched for <strong>{city}</strong>.
            <br />
            <br />
            We sent a weather balloon to find that city… but it came back
            confused.
            <br />
            Mind checking the spelling?
          </p>
          <button className="btn mt-2" onClick={updateErrorStatus}>
            Continue
          </button>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
