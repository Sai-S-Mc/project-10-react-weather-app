import React from "react";

export default function AppGreeting() {
  let date = new Date();

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
  let amOrPm = currentHour >= 12 && currentHour < 24 ? "PM" : "AM";

  let greeting;
  if (currentHour >= 5 && currentHour < 21) {
    if (currentHour < 12) {
      greeting = "Morning";
    } else if (currentHour < 17) {
      greeting = "Afternoon";
    } else {
      greeting = "Evening";
    }
  } else {
    greeting = "Night";
  }

  currentHour === 12 || currentHour === 24
    ? (currentHour = 12)
    : (currentHour = currentHour % 12);

  let currentMinutes = date.getMinutes();

  let dateDisplay = `${day}, ${month} ${currentDate}, ${currentHour}:${
    currentMinutes >= 10 ? currentMinutes : "0" + currentMinutes
  } ${amOrPm} `;

  return (
    <div>
      <h6 className="gradient">Good {greeting}!</h6>
      <h6 className="mb-4 gradient">{dateDisplay}</h6>
    </div>
  );
}
