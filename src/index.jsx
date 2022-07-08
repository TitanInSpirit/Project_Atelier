import React from "react";
import { createRoot } from "react-dom/client";
import Overview from "/Users/travisredden/Documents/Software Engineering/HackReactor/FEC/Project_Atelier/src/components/overview/Overview.jsx";

const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {
  return (
    <div>
      <h1> Header: Hello World</h1>
      <Overview />
    </div>
  );
};

root.render(<App />);
