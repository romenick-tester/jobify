import React from "react";
import { useAppContext } from "../../assets/context";
import { links } from "../../assets";
import { NavLinks, Logo } from "..";
import Wrapper from "../../assets/wrappers/BigSidebar";


const BigSidebar = () => {
    const { sidebar, toggleSidebar } = useAppContext();

    return (
        <Wrapper>
            <div className={sidebar ? "sidebar-container" : "sidebar-container show-sidebar"}>
                <div className="content">
                    <header>
                        <Logo />
                    </header>
                    <NavLinks links={links} toggleSidebar={toggleSidebar} />
                </div>
            </div>
        </Wrapper>
    )
}

export default BigSidebar;