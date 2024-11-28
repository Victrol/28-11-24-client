import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import Users from "./Users";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>HEADER</h1>
    <Users />
  </React.StrictMode>
);
