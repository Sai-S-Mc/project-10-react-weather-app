import React from "react";
import "../styles/Main.css";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import axios from "axios";

export default function Main({ weatherData, handleApiResponse }) {
  let form = (
    <form>
      <div className="row">
        <div className="col-sm-10 ps-1 pe-1">
          <input
            type="search"
            placeholder="Enter a city name"
            className="search-box"
          />
        </div>
        <div className="col-sm-2 ps-1 pe-1">
          <span className="btn-wrapper">
            <input type="submit" value="Search" className="submit-button" />
          </span>
        </div>
      </div>
    </form>
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
    let apiKey = "tbfob32e017e01391b34fe15b81ad2a6";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleApiResponse);

    return (
      <div className="Main">
        {form}
        <div>Loading weather for {city}</div>
      </div>
    );
  }
}
