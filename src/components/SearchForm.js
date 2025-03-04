import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form>
        <input
          type="search"
          placeholder="Enter a city name"
          className="search-box"
        />
        <input type="submit" value="Search" className="submit-button" />
      </form>
    </div>
  );
}
