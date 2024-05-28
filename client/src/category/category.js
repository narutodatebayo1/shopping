import "./category.css"
import Nav from "../nav/nav";
import {useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import star from "../images/star.png"
import { useNavigate } from "react-router-dom"

export default function Category(){

    const [products, SetProducts] = useState()
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(json=>SetProducts(json))
    }, [])


    let filteredProduct = products?.filter((product)=>{
        return product.category === params.id
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
}