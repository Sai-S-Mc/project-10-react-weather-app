import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This weather project was coded by{" "}
        <a href="https://github.com/Sai-S-Mc" target="_blank" rel="noreferrer">
          Sai Satti
        </a>
        , is open-sourced on{" "}
        <a
          href="https://github.com/Sai-S-Mc/project-10-react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , and is hosted on{" "}
        <a
          href="https://project-10-react-weather-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </p>
    </div>
  );
}
