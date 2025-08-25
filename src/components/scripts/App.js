import React, { useState } from "react";
import "../styles/App.css";
import AppFooter from "./AppFooter";
import AppMain from "./AppMain";
import AppGreeting from "./AppGreeting";

export default function App() {
  const [weatherData, setWeatherData] = useState({ apiResponse: false });
  const [error, setError] = useState({ status: false });

  function handleApiResponse(response) {
    if (response.data.message) {
      setError({
        status: true,
        type: "not found",
      });
      return;
    }

    setWeatherData({
      apiResponse: true,
      city: response.data.city,
      country: response.data.country,
      temperature: response.data.temperature.current,
      realFeel: response.data.temperature.feels_like,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      windSpeed: response.data.wind.speed,
      timestamp: response.data.time,
      icon: response.data.condition.icon,
    });
  }

  function updateErrorStatus() {
    setError({
      status: false,
    });
  }

  function handleApiError() {
    setError({
      status: true,
      type: "api",
    });
  }

  return (
    <div className="App">
      <header>
        <h1 className="mt-4 mb-4 gradient">
          SkyChime - Your Weather Assistant
        </h1>
        <AppGreeting />
      </header>
      <AppMain
        weatherData={weatherData}
        handleApiResponse={handleApiResponse}
        errorStatus={error.status}
        errorType={error.type}
        updateErrorStatus={updateErrorStatus}
        handleApiError={handleApiError}
      />
      <AppFooter />
    </div>
  );
}
