import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hamburger from '../../images/hamburger.png'
import "./logo.css"

export default function Logo(){


    const navigate = useNavigate();
    const [isIn, SetIsIn] = useState(0);
    const hamburgerClicked = () => {
        if(isIn === 0) SetIsIn(1)
        else SetIsIn(0)
    }

    return (
        <>
            <div id="hamburgerLogo">
                <div id="hamburger" onClick={hamburgerClicked}>
                    <img src={hamburger} alt=""/>
                </div>
                <div id="logo" onClick={()=>navigate("/")}>Logo</div>
            </div>
            <div id="popUp" className={isIn ? "popUpIn" : "popUpOut"}>
                <div id="hamburgerLogo">
                    <div id="hamburger" onClick={hamburgerClicked}>
                        <img src={hamburger} alt=""/>
                    </div>
                    <div id="logo" onClick={()=>navigate("/")}>Logo</div>
                </div>
                <div id="popUpLinks">
                    <div onClick={()=>navigate("/")}>Home</div>
                    <div onClick={()=>navigate("/about")}>About Us</div>
                </div>
            </div>
            <div 
                id="opacityBackground"
                className={isIn ? "opacityBackgroundIn" : "opacityBackgroundOut"}
                onClick={()=>SetIsIn(0)}
            >
            </div>
        </>
    )
}