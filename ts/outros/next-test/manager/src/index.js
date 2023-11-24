import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ChangePassword from "./ChangePassord";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/auth/login.html" replace />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route
          path="/login"
          element={<Navigate to="/auth/login.html" replace />}
        />
        <Route
          path="/auth/login"
          element={<Navigate to="/auth/login.html" replace />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
