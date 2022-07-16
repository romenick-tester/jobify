import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
// eslint-disable-next-line
import * as Dashboard from "./pages/Dashboard";


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard.SharedLayout />}>
                    <Route index element={<Dashboard.Stats />} />
                    <Route path="alljobs" element={<Dashboard.AllJobs />} />
                    <Route path="addjob" element={<Dashboard.AddJob />} />
                    <Route path="profile" element={<Dashboard.Profile />} />
                </Route>
                <Route path="/auth" element={<Pages.Auth />} />
                <Route path="/landing" element={<Pages.Landing />} />
                <Route path="*" element={<Pages.Error />} />
            </Routes>
        </>
    )
}

export default App;