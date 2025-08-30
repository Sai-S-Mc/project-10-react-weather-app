import React from "react";

export default function DisplayTemperature({
  temp,
  unit,
  className,
  displayUnit,
}) {
  function determineUnit() {
    if (displayUnit === false) {
      return "";
    } else {
      if (unit === "metric") {
        return " °C";
      } else {
        return " °F";
      }
    }
  }

  function calculateTemp() {
    if (unit === "metric") {
      return temp;
    } else {
      return (temp * 9) / 5 + 32;
    }
  }

  return (
    <span className={className}>
      {Math.round(calculateTemp()) + determineUnit()}
    </span>
  );
}
