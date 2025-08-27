import React from "react";

export default function DisplayTemperature({ temp, unit, className, noUnit }) {
  function determineUnit() {
    if (!noUnit) {
      if (unit === "metric") {
        return " °C";
      } else {
        return " °F";
      }
    } else {
      return "";
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
