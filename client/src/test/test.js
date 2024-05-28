import "./test.css"
import { useEffect, useState } from "react"
import axios from "axios"
import Test2 from "./test2/test2"

export default function Test(){

    const [accounts, SetAccounts] = useState()
    useEffect(() => {
        axios.get("http://192.168.1.9:5000/account")
            .then(res => res.data)
            .then(data => SetAccounts(data))
    })

    return (
        <div>
            <Test2 accounts={accounts} />
        </div>
    )
}