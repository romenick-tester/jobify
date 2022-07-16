import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../../assets/context";
import { logoutUser } from "../../assets/context/actions";
import Wrapper from "../../assets/wrappers/Navbar";
import Logo from "../Logo";

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const dispatch = useDispatch();

    const { toggleSidebar } = useAppContext();
    const { user } = useSelector(state => state.auth);

    return (
        <Wrapper>
            <div className="nav-center">
                <button className="toggle-btn" onClick={toggleSidebar}>
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h3 className="logo-text">dashboard</h3>
                </div>
                <div className="btn-container">
                    <button className="btn" type="button" onClick={() => setShowDropdown(!showDropdown)}>
                        <FaUserCircle />
                        {user && user.name ? user.name.split(" ")[0] : "User"}
                        <FaCaretDown />
                    </button>
                    <div className={`dropdown ${showDropdown && "show-dropdown"}`}>
                        <button
                            className="dropdown-btn"
                            type="button"
                            onClick={() => dispatch(logoutUser())}>
                            logout
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar;