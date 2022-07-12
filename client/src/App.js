import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
// eslint-disable-next-line
import * as Dashboard from "./pages/Dashboard/Dashboard";


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<div>dashboard</div>} />
                <Route path="/auth" element={<Pages.Auth />} />
                <Route path="/landing" element={<Pages.Landing />} />
                <Route path="*" element={<Pages.Error />} />
            </Routes>
        </>
    )
}

export default App;