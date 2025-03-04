import React from "react";
import "./Main.css";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function Main() {
  return (
    <div className="Main">
      <form>
        <input
          type="search"
          placeholder="Enter a city name"
          className="search-box"
        />
        <span className="btn-wrapper">
          <input type="submit" value="Search" className="submit-button" />
        </span>
      </form>
      <CurrentWeather />
      <Forecast />
    </div>
  );
}
