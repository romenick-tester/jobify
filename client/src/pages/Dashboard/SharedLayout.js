import React from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import ProtectedRoute from "../ProtectedRoute";


const SharedLayout = () => {
    return (
        <ProtectedRoute>
            <Wrapper>
                <nav>
                    <Link to="alljobs">all jobs</Link>
                    <Link to="addjob">add job</Link>
                </nav>
                <Outlet />
            </Wrapper>
        </ProtectedRoute>
    )
};

export default SharedLayout;