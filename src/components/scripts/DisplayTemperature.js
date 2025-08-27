import React from "react";

export default function DisplayTemperature({temp, unit}) {
return <span className="bluish-grey-text">
            {unit === "metric"
              ? Math.round(temp) + " °C"
              : Math.round((temp * 9) / 5 + 32) +
                " °F"}
          </span>
}
