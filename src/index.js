import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CurrentUserProvider } from "./context/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CurrentUserProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CurrentUserProvider>
  </BrowserRouter>
);


