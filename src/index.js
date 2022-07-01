import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CinemaProvider } from "./context/CinemaContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CinemaProvider>
      <App />
    </CinemaProvider>
  </React.StrictMode>
);
