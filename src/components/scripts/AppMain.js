import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AppMain.css";
import axios from "axios";
import MainSearchForm from "./MainSearchForm";
import MainCurrentAndForecast from "./MainCurrentAndForecast";
import ErrorHandler from "./ErrorHandler";

export default function AppMain({
  weatherData,
  handleApiResponse,
  errorStatus,
  updateErrorStatus,
  errorType,
  handleApiError,
}) {
  const [city, setCity] = useState("Victoria");

  function search() {
    let apiKey = "tbfob32e017e01391b34fe15b81ad2a6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleApiResponse).catch(handleApiError);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (city) {
      search();
    } else {
      alert("Spacebar is not a city yet🚀!");
    }
  }

  function captureUserInput(event) {
    let userInput = event.target.value.trim();
    setCity(userInput);
  }

  let searchForm = (
    <MainSearchForm
      captureUserInput={captureUserInput}
      handleSubmit={handleSubmit}
    />
  );

  function mainSection() {
    if (!errorStatus) {
      if (weatherData.apiResponse) {
        return (
          <>
            {searchForm}
            <MainCurrentAndForecast weatherData={weatherData} />
          </>
        );
      } else {
        search();

        return (
          <>
            {searchForm}
            <div className="text-center pb-3 pt-3 loading">
              Loading weather for {city}
            </div>
            <br />
            <br />
          </>
        );
      }
    } else {
      return (
        <>
          <br />
          <br />
          <div className="text-center p-5 error-message">
            <ErrorHandler
              city={city}
              updateErrorStatus={updateErrorStatus}
              errorType={errorType}
            />
          </div>
          <br />
          <br />
        </>
      );
    }
  }


  return <div className="Main">{mainSection()}</div>;
}
