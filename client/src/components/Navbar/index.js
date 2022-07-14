import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "../Logo";

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <Wrapper>
            <div className="nav-center">
                <button className="toggle-btn" onClick={() => console.log("toggle sidebar")}>
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h3 className="logo-text">dashboard</h3>
                </div>
                <div className="btn-container">
                    <button className="btn" type="button" onClick={() => setShowDropdown(!showDropdown)}>
                        <FaUserCircle />
                        John
                        <FaCaretDown />
                    </button>
                    <div className={`dropdown ${showDropdown && "show-dropdown"}`}>
                        <button className="dropdown-btn" type="button">
                            logout
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar;