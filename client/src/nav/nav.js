import "./nav.css"
import { useNavigate, useLocation } from "react-router-dom"
import Logo from "./logo/logo";
import SearchBar from "./searchBar/searchBar";
import Profile from "./profile/profile";

export default function Nav(){

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav>
            <div id="relativePosition">
            <Logo />
            <SearchBar />
            <div id="links">
                <div className="link" onClick={()=>navigate("/")}>
                    Home
                    {location.pathname === "/" ? <div id="active"></div> : <div></div>}
                </div>
                <div className="link" onClick={()=>navigate("/about")}>
                    About
                    {location.pathname === "/about" ? <div id="active"></div> : <div></div>}
                </div>
            </div>
            <Profile />
            </div>
        </nav>
    )
}