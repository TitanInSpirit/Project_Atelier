import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));


class App extends React.Component {

  render() {
    return <h1>Hello world</h1>
  }
}


root.render(<App />);