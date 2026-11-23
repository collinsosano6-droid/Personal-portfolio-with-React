import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// BrowserRouter lets us have different "pages" without reloading the browser
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);