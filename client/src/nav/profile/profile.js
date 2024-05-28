import user from "../../images/user.png"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Domain } from "../../domain"
import Axios from "axios"
import "./profile.css"

export default function Profile(){

    const navigate = useNavigate()
    const [loggedIn, SetLoggedIn] = useState(0)
    const [displayBlock, SetDisplayBlock] = useState(0)

    Axios.defaults.withCredentials = true
    useEffect(()=>{
        Axios.get("http://" + Domain() + ":5000/login")
            .then((res) => {
                console.log(res.data)
                if(res.data.loggedIn === true){
                    SetLoggedIn(1)
                } else {
                    SetLoggedIn(0)
                }
            })
    }, [])

    const toggleProfile = () => {
        if(displayBlock === 0) SetDisplayBlock(1)
        else SetDisplayBlock(0)
    }

    const logOut = () => {
        Axios.post("http://" + Domain() + ":5000/logout")
            .then(window.location.reload())
    }
    
    return (
        <>
            {loggedIn ? <img id="profile" src={user} alt="" onClick={toggleProfile}/> : <div id="register" onClick={()=>navigate("/register")}>Register</div>}
            <div 
                id="backgroundToggle"
                className={displayBlock ? "backgroundToggleBlock" : "backgroundToggleNone"}
                onClick={()=>{SetDisplayBlock(0)}}
            ></div>
            <div id="profilePopUp" className={displayBlock ? "displayBlock" : "displayNone"}>
                <div>My Profile</div>
                <div onClick={logOut}>Logout</div>
            </div>
        </>
    )
}