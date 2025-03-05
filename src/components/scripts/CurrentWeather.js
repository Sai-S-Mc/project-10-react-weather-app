import React from "react";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div>
        <div className="temperature-wrapper">🌥️9°C|F</div>
        <div>Feels like : 0°C</div>
        <div>Toronto, Canada</div>
      </div>
      <div>
        <ul>
          <li>Mostly Cloudy</li>
          <li>Humidity : 20%</li>
          <li>Wind: 5 km/h</li>
          <li>Today's Low: -1°C</li>
          <li>Today's High: 10°C</li>
        </ul>
      </div>
    </div>
  );
}
