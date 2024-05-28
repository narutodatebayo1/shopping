import "./home.css"
import Nav from "../nav/nav"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import star from "../images/star.png"

function Home(){

    const [products, SetProducts] = useState()

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(json=>SetProducts(json))
    }, [])



    const navigate = useNavigate();

    

    if(products){
        return(
            <div>
                <Nav />

                <div id="allProductDiv">
                    {products.map((product)=>{
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



            </div>
        )
    } else {
        return <div>Loading</div>
    }
}

export default Home