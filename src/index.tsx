import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BettingProvider } from "./context/BettingContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BettingProvider>
        <App />
      </BettingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
