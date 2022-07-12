import React from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";


const SharedLayout = () => {
    return (
        <Wrapper>
            <nav>
                <Link to="alljobs">all jobs</Link>
                <Link to="addjob">add job</Link>
            </nav>
            <Outlet />
        </Wrapper>
    )
};

export default SharedLayout;