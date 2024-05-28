import Nav from "../nav/nav"
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import star from "../images/star.png"
import "./searchResult.css"

export default function SearchResult(){


    const [products, SetProducts] = useState()
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(json=>SetProducts(json))
    }, [])

    if(params.params.length > 7){
        const filteredProduct = products?.filter((product) => {
            return product.title.toLowerCase().includes(params.params.substring(7).toLowerCase())
        })
        return (
            <>
                <Nav />
                <div id="allProductDiv">
                    {filteredProduct?.map((product)=>{
                        return (
                            <div className="productDiv" key={product.id} onClick={()=>{navigate(`/id=${product.id}`)}}>
                                <div className="imageDiv">
                                    <img src={product.image} alt=""/>
                                </div>
                                <div className="textDiv">
                                    <div>{product.title}</div>
                                    <div>
                                        $ {product.price}
                                    </div>
                                    <div>
                                        <img src={star} alt=""/>
                                        {product.rating.rate}
                                        ({product.rating.count})
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    } else {
        return (
            <>No search</>
        )
    }

    
    

    
}