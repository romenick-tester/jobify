import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../../assets/context";
import { links } from "../../assets";
import Wrapper from "../../assets/wrappers/SmallSidebar";
import Logo from "../Logo";


const SmallSidebar = () => {
    const { toggleSidebar, sidebar } = useAppContext();

    return (
        <Wrapper>
            <div className={`sidebar-container ${sidebar && "show-sidebar"}`}>
                <div className="content">
                    <button
                        type="button"
                        className="close-btn"
                        onClick={toggleSidebar}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <div className="nav-links">nav links</div>
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSidebar;