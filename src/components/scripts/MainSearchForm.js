import React from "react";

export default function MainSearchForm({ handleSubmit, captureUserInput }) {
  return (
    <div className="search-wrapper">
      <form className="pb-4" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-10 ps-1 pe-1">
            <input
              type="search"
              placeholder="Enter a city name"
              className="search-box"
              onChange={captureUserInput}
            />
          </div>
          <div className="col-sm-2 ps-1 pe-1">
            <span className="btn-wrapper">
              <input type="submit" value="Search" className="submit-button" />
            </span>
          </div>
        </div>
      </form>
      <div className="text-center tip ">
        Tip : When searching for namesake towns or cities, enter the name
        followed by the province/state, and the country, each separated by
        commas. For example, London, Ontario, Canada.
      </div>
    </div>
  );
}
