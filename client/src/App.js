import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import * as Pages from "./pages";
// eslint-disable-next-line
import { AllJobs, Profile, SharedLayout, Stats, AddJob } from "./pages/Dashboard/Dashboard";


const App = () => {
    return (
        <>
            <Nav>
                <Link to="/">dashboard</Link>
                <Link to="/auth">sign-up</Link>
                <Link to="/landing">landing</Link>
            </Nav>
            <Routes>
                <Route path="/" element={<div>dashboard</div>} />
                <Route path="/auth" element={<Pages.Auth />} />
                <Route path="/landing" element={<Pages.Landing />} />
                <Route path="*" element={<Pages.Error />} />
            </Routes>
        </>
    )
}

const Nav = styled.nav`
    >*:not(:last-child) {
        margin-right: 1rem;
    }
`

export default App;