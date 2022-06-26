import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import "./assets/css/index.css";
import App from "./App";
import { AppProvider } from "./assets/context";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <AppProvider>
        <Router>
            <App />
        </Router>
    </AppProvider>
)