import React from "react";

export default function MainSearchForm({ handleSubmit, captureUserInput }) {
  return (
    <div className="search-wrapper">
      <form className="mb-4 mt-4" onSubmit={handleSubmit}>
        <details className="tip mb-4 p-2 ps-3 pe-3 rounded shadow ">
          <summary>Search Tip</summary>
          <ul className="tip m-2 mt-0 p-3 rounded shadow">
            <li className="ms-2">
              When searching for namesake towns or cities, enter the name
              followed by the province/state, and the country, each separated by
              commas.
            </li>
            <li className="ms-2">For example, London, Ontario, Canada.</li>
            <li className="ms-2">
              If you search for 'London' alone, you'll see results for London,
              United Kingdom.
            </li>
          </ul>
        </details>
        <div className="row">
          <div className="col-sm-10 ps-1 pe-1">
            <input
              type="search"
              placeholder="Enter a city name"
              className="search-box w-100"
              required
              onChange={captureUserInput}
            />
          </div>
          <div className="col-sm-2 ps-1 pe-1">
            <span className="btn-wrapper">
              <input
                type="submit"
                value="Search"
                className="submit-button w-100"
              />
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
