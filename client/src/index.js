import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./context/AuthContext";
import BillContextProvider from "./context/BillContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider>
  <BillContextProvider>
    <App />
  </BillContextProvider>
  </AuthContextProvider>
);
