import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Domain } from "../domain.js";
import "./register.css"
import Axios from "axios";

function Register() {

    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");
    // const [accounts, SetAccounts] = useState();

    // const [usernameText, SetUsernameText] = useState("")
    // const [passwordText, SetPasswordText] = useState("")
    
    const navigate = useNavigate();


    Axios.defaults.withCredentials = true
    useEffect(()=>{
        Axios.get("http://" + Domain() + ":5000/login")
            .then((res) => {
                console.log(res.data)
                if(res.data.loggedIn === true){
                    navigate(-1)
                }
            })
        
        // if(getLogin() === true){
        //     navigate("/")
        // }
    }, [navigate])

    const signUp = () => {

        Axios.post("http://"+ Domain() + ":5000/register", {username: username, password: password})
            .then(
                (res) => {
                    if(res.data === "Value Inserted"){
                        navigate("/login")
                    } else {
                        alert(res.data)
                    }
                }
            )

        // const value = postRegister(username, password)

        // console.log(value)
        // console.log(value === 1)

        // if(value === 1){
        //     navigate("/login")
        // } else {
        //     alert("Username already taken")
        // }
    }

    const usernameChange = (e) => {
        SetUsername(e.target.value)
    }

    const passwordChange = (e) => {
        SetPassword(e.target.value)
    }

    return (
        <div id="centerDiv">
            <div id="registerDiv">
                <div id="title">Register</div>
                <div className="inputDiv">
                    <input type="text" placeholder=" " onChange={usernameChange}/>
                    <label>Username</label>
                    
                </div>
                <div className="inputDiv">
                    <input type="password" placeholder=" " onChange={passwordChange}/>
                    <label>Password</label>
                </div>
                <div id="buttonDiv">
                    <button onClick={signUp}>Sign Up</button>
                </div>
                Already have an account? <label onClick={ ()=>navigate("/login") }>Login Here</label>
            </div>
        </div>
    )
}

export default Register