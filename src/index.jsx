import React from "react";
import { createRoot } from "react-dom/client";
import Overview from "./components/overview/Overview.jsx";
<<<<<<< HEAD
import RatingsAndReviews from './components/ratingsAndReviews/RatingsAndReviews.jsx';
import '../public/stylesheets/style.css'
=======
import RatingsAndReviews from "./components/ratingsAndReviews/RatingsAndReviews.jsx";
>>>>>>> ac6d72d01e1affa63d7e652b26fe4d3f88f08c55

const root = createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      <h1> Header: Hello World!!!!!!</h1>
      <Overview />
      <RatingsAndReviews />
    </div>
  );
};

root.render(<App />);
