import React from "react";
import "../styles/AppFooter.css";

export default function AppFooter() {
  return (
    <div className="pt-5 pb-5 pe-2 ps-2 Footer">
      <p className="m-0">
        This weather project was coded by{" "}
        <a
          href="https://github.com/Sai-S-Mc"
          target="_blank"
          rel="noreferrer"
          title="Sai's GitHub Profile"
          className="gradient"
        >
          Sai Satti
        </a>
        , is open-sourced on{" "}
        <a
          href="https://github.com/Sai-S-Mc/project-10-react-weather-app"
          target="_blank"
          rel="noreferrer"
          title="Sai's GitHub repository"
          className="gradient"
        >
          GitHub
        </a>
        , and is hosted on{" "}
        <a
          href="https://project-10-react-weather-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
          title="Sai's project on Netlify"
          className="gradient"
        >
          Netlify
        </a>
      </p>
      <p className="mb-0 pt-4 copyright">
        Copyright ©2025 Sai Satti. All rights reserved.
      </p>
    </div>
  );
}
