import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import ProtectedRoute from "../ProtectedRoute";
import { Navbar, BigSidebar, SmallSidebar } from "../../components";


const SharedLayout = () => {
    return <ProtectedRoute>
        <Wrapper>
            <main className="dashboard">
                <SmallSidebar />
                <BigSidebar />
                <div>
                    <Navbar />
                    <MainView>
                        <Outlet />
                    </MainView>
                </div>
            </main>
        </Wrapper>
    </ProtectedRoute>
}

const MainView = ({ children }) => {
    return (
        <div className="dashboard-page">
            {children}
        </div>
    )
}

export default SharedLayout;