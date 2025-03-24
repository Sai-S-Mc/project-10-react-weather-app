import React, { useState } from "react";
import "../styles/Main.css";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import axios from "axios";

export default function Main({ weatherData, handleApiResponse }) {
  const [city, setCity] = useState("Iqaluit");

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

  let form = (
    <div className="search-wrapper">
      <form className="pb-4" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-10 ps-1 pe-1">
            <input
              type="search"
              placeholder="Enter a city name"
              className="search-box"
              onChange={captureUserInput}
            />
          </div>
          <div className="col-sm-2 ps-1 pe-1">
            <span className="btn-wrapper">
              <input type="submit" value="Search" className="submit-button" />
            </span>
          </div>
        </div>
      </form>
      <div className="text-center tip ">
        Tip : When searching for lesser-known towns, enter the town followed by the
        province/state and country, each separated by commas. For example,
        Belleville, Ontario, Canada.
      </div>
    </div>
  );

  if (weatherData.apiResponse) {
    return (
      <div className="Main">
        {form}
        <CurrentWeather weather={weatherData} />
        <Forecast />
      </div>
    );
  } else {
    search();
    return (
      <div className="Main">
        {form}
        <div>Loading weather for {city}</div>
      </div>
    );
  }
}
