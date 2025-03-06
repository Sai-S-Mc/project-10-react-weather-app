import React from "react";
import "../styles/Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-md">
          <div className="daily-forecast">
            Mon
            <br />
            <br />
            <ReactAnimatedWeather
              icon={"PARTLY_CLOUDY_DAY"}
              color={"#6090E7"}
              size={50}
              animate={true}
            />
            <br />
            <br />
            <div className="daily-high-low">
              <strong>13° </strong>2°
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="daily-forecast">
            Mon
            <br />
            <br />
            <ReactAnimatedWeather
              icon={"PARTLY_CLOUDY_DAY"}
              color={"#6090E7"}
              size={50}
              animate={true}
            />
            <br />
            <br />
            <div className="daily-high-low">
              <strong>13° </strong>2°
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="daily-forecast">
            Mon
            <br />
            <br />
            <ReactAnimatedWeather
              icon={"PARTLY_CLOUDY_DAY"}
              color={"#6090E7"}
              size={50}
              animate={true}
            />
            <br />
            <br />
            <div className="daily-high-low">
              <strong>13° </strong>2°
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="daily-forecast">
            Mon
            <br />
            <br />
            <ReactAnimatedWeather
              icon={"PARTLY_CLOUDY_DAY"}
              color={"#6090E7"}
              size={50}
              animate={true}
            />
            <br />
            <br />
            <div className="daily-high-low">
              <strong>13° </strong>2°
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="daily-forecast">
            Mon
            <br />
            <br />
            <ReactAnimatedWeather
              icon={"PARTLY_CLOUDY_DAY"}
              color={"#6090E7"}
              size={50}
              animate={true}
            />
            <br />
            <br />
            <div className="daily-high-low">
              <strong>13° </strong>2°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
