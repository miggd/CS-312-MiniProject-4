import React from "react";
import ReactDOM from "react-dom/client"; // Updated to use `react-dom/client`
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";

// Create the root element and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Performance logging
// If you want to start measuring performance in your app, pass a function
// to log results (for example: `reportWebVitals(console.log)`)
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log); // Logs web vitals to the console
