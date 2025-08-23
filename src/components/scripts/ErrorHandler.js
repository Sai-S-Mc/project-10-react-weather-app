import React from "react";

export default function ErrorHandler({ errorType, updateErrorStatus, city }) {
  let errorMessage;
  if (errorType === "api") {
    errorMessage = (
      <p>
        Our weather robots are feeling a bit under the weather 🤒
        <br />
        Hang tight, we're working on it!
        <br />
        Please try again soon.
      </p>
    );
  } else {
    errorMessage = (
      <p>
        You searched for <strong>{city}</strong>.
        <br />
        <br />
        We sent a weather balloon to find that city… but it came back confused.
        <br />
        Mind checking the spelling?
      </p>
    );
  }

  return (
    <>
      {errorMessage}
      <button className="btn mt-2" onClick={updateErrorStatus}>
        Continue
      </button>
    </>
  );
}
