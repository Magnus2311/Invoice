import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configureStore from "./redux/configureStore";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById("root")
);
