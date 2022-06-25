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
                <Route path="/" element={<Pages.Dashboard />} />
                <Route path="/signup" element={<Pages.Signup />} />
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