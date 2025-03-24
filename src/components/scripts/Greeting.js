import React from "react";

export default function Greeting({ weatherData }) {
  let date = new Date(weatherData.timestamp * 1000);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[date.getMonth()];

  let currentDate = date.getDate();
  let currentHour = date.getHours();
  let greeting;
  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Afternoon";
  } else if (currentHour >= 17 && currentHour < 21) {
    greeting = "Evening";
  } else {
    greeting = "Night";
  }

  let amOrPm = currentHour >= 12 ? "PM" : "AM";
  currentHour = currentHour % 12;

  let currentMinutes = date.getMinutes();

  let dateDisplay = `${day}, ${month} ${currentDate}, ${currentHour}:${
    currentMinutes >= 10 ? currentMinutes : "0"+currentMinutes
  } ${amOrPm} `;

  return (
    <div>
      <h6 className="gradient">Good {greeting}!</h6>
      <h6 className="mb-4 gradient">{dateDisplay}</h6>
    </div>
  );
}
