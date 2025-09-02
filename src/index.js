import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={5} color="blue" setMovieRating={setMovieRating} />
      <p>You like {movieRating} movies</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={6}
      message={["Terrable", "not okay", "good", "okay", "amazing"]}
    />
    <StarRating color="red" defaultRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
