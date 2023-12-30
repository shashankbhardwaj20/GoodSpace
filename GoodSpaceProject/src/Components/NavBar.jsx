import React from "react";
import  ReactDOM  from "react";
import Logo from "../Asset/Vector.svg";
import "../Styles/Nav.css";


function NavBar(){
    return(
        <div className="nav_bar">
            <img src={Logo} className="myLogo"></img>
        </div>
    )
}

export default NavBar;