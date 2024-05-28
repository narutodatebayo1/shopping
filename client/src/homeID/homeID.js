import { useState, useEffect } from "react"
import {useParams, useNavigate} from 'react-router-dom';
import Nav from "../nav/nav";
import "./homeID.css"
import star from "../images/star.png"

export default function HomeID(){

    const [products, SetProducts] = useState()
    const navigate = useNavigate();
    const params = useParams();
    

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(json=>SetProducts(json))
    }, [])

    if(params.params.length > 3){

        const tempId = parseInt(params.params.substring(3))
        const id = tempId - 1

        return (
            <div>
                <Nav />
                {products ? 
                <div id="productOuterDiv" className="center">
                    
                    <div id="innerDiv">
                        <div id="imageDiv">
                            <img src={products[id].image} alt="" />
                        </div>
                        <div id="textDiv">

                            <p id="productName">{products[id].title}</p>
                            <div>
                                <img src={star} alt="" />
                                {products[id].rating.rate} ({products[id].rating.count})
                            </div>

                            <p id="productPrice">$ {products[id].price}</p>
                            <p>Category: <label id="productCategory" onClick={()=>navigate(`/category/${products[id].category}`)}>{products[id].category}</label></p>
                            <p>{products[id].description}</p>
                            
                        </div>
                        <div id="buyDiv" className="center">
                            <button>Buy Product</button>
                        </div>
                    </div>
                    
                </div>:<div>Loading</div>}
            </div>
        )
    } else {
        return (
            <>No id</>
        )
    }
}