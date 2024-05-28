import "./searchBar.css"
import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import lens from "../../images/lens.png"
import arrow from "../../images/arrow.png"

export default function SearchBar(){

    const navigate = useNavigate();
    const location = useLocation();
    const inputRef = useRef();

    const [searchText, SetSearchText] = useState("")
    const [open, SetOpen] = useState(0)


    useEffect(() => {
        
        if(location.pathname.substring(1, 7) === "search"){
            document.getElementById("searchBarInput").value = location.pathname.substring(8, location.pathname.length)
            SetOpen(1)

        }
    }, [location.pathname])

    const search = () => {
        if(window.innerWidth < 768){
            
            SetOpen(1)
            setTimeout(() => inputRef.current.focus(), 100)
            if(searchText !== "" && open === 1){
                navigate(`/search=${searchText}`)
            }
        } else {
            if(searchText !== ""){
                navigate(`/search=${searchText}`)
            }
        }
        
    }

    const arrowEvent = () => {
        location.pathname.substring(1, 7) === "search" ? goBack() : close()
    }
    const goBack = () => {navigate(-1)}
    const close = () => {SetOpen(0)}

    const inputEntered = (event) => {
        if(event.code === "Enter"){
            navigate(`/search=${searchText}`)
        }
    }

    return (
        <div id="searchBar" className={open ? "openSearchBar" : "closeSearchBar"}>
            <img src={arrow} id="arrow" alt="" onClick={arrowEvent} />
            <input type="text" id="searchBarInput" onChange={(e) => SetSearchText(e.target.value)} ref={inputRef} onKeyDown={inputEntered} />
            <img src={lens} id="lens" alt="" onClick={search} />
        </div>
    )
}