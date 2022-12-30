import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import todoStore from "./Store/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider>
      <Provider store={todoStore}>
        <App />
      </Provider>
    </RouterProvider>
  </React.StrictMode>
);
