import { useParams } from "react-router-dom"
import SearchResult from "../searchResult/searchResult"
import HomeID from "../homeID/homeID"

export default function ParamsHandler(){

    const params = useParams()
    // if()
    return (
        <>
            {params.params.substring(0, 6) === "search" ? <SearchResult /> : <></>}
            {params.params.substring(0, 2) === "id" ? <HomeID /> : <></>}
        </>
    )
}