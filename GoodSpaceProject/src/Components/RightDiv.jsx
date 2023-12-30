import React from "react";
import  ReactDOM  from "react";
import "../Styles/RightDiv.css";
function RightDiv(){
    return (
        <div className="right_div">
            <h2 className="right_div_h2">Sign-up/Login</h2>
            <label>Email</label>
            <input type='text'></input>
            <label>Password</label>
            <input type='password'></input>\
            <button type="submit">Lets Go</button>
        </div>
    )
}
export default RightDiv 
