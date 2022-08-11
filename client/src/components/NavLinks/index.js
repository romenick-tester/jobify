import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../assets/context";


const NavLinks = ({ links, toggleSidebar }) => {
    const { setIsEditing, clearValues } = useAppContext();

    const onClickHandler = () => {
        clearValues();
        setIsEditing(false);
        toggleSidebar();
    };

    return (
        <div className="nav-links">
            {links.map(link => {
                const { text, path, id, icon } = link;
                return (
                    <NavLink
                        to={path}
                        key={id}
                        onClick={onClickHandler}
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        <span className="icon">{icon}</span>
                        {text}
                    </NavLink>
                )
            })}
        </div>
    )
}

export default NavLinks;