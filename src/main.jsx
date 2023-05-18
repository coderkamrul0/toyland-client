import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div style={{backgroundColor: '#E9F8FF'}}>
    <div className="max-w-7xl mx-auto">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  </div>
);
