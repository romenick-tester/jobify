import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<div>dashboard page</div>} />
            <Route path="/signup" element={<div>sign-up page</div>} />
            <Route path="/landing" element={<Pages.LandingPage />} />
            <Route path="*" element={<div>error page</div>} />
        </Routes>
    )
}

export default App;