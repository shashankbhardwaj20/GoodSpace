import React from "react";
import ReactDOM from "react";
import "../Styles/LeftDiv.css";
import LeftImg from "../Asset/LeftImage.svg"

function LeftDiv(){
    return (
        <div className="left_div">
            <img src={LeftImg}></img>
            <p className="left_div_p">Welcome to </p>
            <p className="left_div_p">Good Space Communications</p>
        </div>
    )
}
export default LeftDiv;