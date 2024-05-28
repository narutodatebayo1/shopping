import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Domain } from "../domain"
import axios from "axios"
import "./login.css"

function Login(props) {

    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");
    // const [accounts, SetAccounts] = useState();

    const [usernameText, SetUsernameText] = useState("")
    const [passwordText, SetPasswordText] = useState("")

    const navigate = useNavigate();

    // const navigateHome = () => {navigate("/")}

    axios.defaults.withCredentials = true
    useEffect(()=>{
        axios.get("http://" + Domain() + ":5000/login")
            .then((res) => {
                console.log(res.data)
                if(res.data.loggedIn === true){
                    navigate(-1)
                }
            })
    }, [navigate])


    

    const login = () => {

        axios.post("http://localhost:5000/login", {username: username, password: password})
            .then(
                (res) => {
                    alert()
                    console.log(res)
                    if(res.data === "Wrong Password"){
                        SetPasswordText(res.data)
                        SetUsernameText("")
                    } else if(res.data === "Username Not Found"){
                        SetUsernameText(res.data)
                        SetPasswordText("")
                    } else {
                        // alert()
                        SetUsernameText("")
                        SetPasswordText("")
                        navigate("/")
                    }
                }
            )
    }

    return (
        <div id="centerDiv">
            <div id="registerDiv">
                <div id="title">Login</div>
                <div className="inputDiv">
                    <input type="text" placeholder=" " onChange={ (e)=>{SetUsername(e.target.value)}}/>
                    <label>Username</label>
                    {usernameText === "" ? <div className="dummyTextDiv">A</div> : <div className="realTextDiv">{usernameText}</div>}
                </div>
                <div className="inputDiv">
                    <input type="password" placeholder=" " onChange={ (e)=>{SetPassword(e.target.value)}}/>
                    <label>Password</label>
                    {passwordText === "" ? <div className="dummyTextDiv">A</div> : <div className="realTextDiv">{passwordText}</div>}
                </div>
                <div id="buttonDiv">
                    <button onClick={login}>Sign In</button>
                </div>
                Dont have an account? <label onClick={ ()=>navigate("/register") }>Register Here</label>
            </div>
        </div>
    )
}

export default Login