import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import * as Pages from "./pages";


const App = () => {
    return (
        <>
            <Nav>
                <Link to="/">dashboard</Link>
                <Link to="/signup">sign-up</Link>
                <Link to="/landing">landing</Link>
            </Nav>
            <Routes>
                <Route path="/" element={<div>dashboard page</div>} />
                <Route path="/signup" element={<div>sign-up page</div>} />
                <Route path="/landing" element={<Pages.LandingPage />} />
                <Route path="*" element={<div>error page</div>} />
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