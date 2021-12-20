import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      {/* wrapping our app in StateProvider so that all the components can get that data whenever needed */}
      {/* initial state is how the data looks in the starting or we can say the initialState of the  data   */}
      {/* reducer is how we transform the data or how we manipulate the data or what we do with given data */}
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
