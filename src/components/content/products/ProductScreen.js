import { useParams } from "react-router-dom";
import data from '../../../data'
import Rating from "./Rating";
import './productScreen.css';
import { useStore } from "../../../store";
import { useEffect } from "react";


function ProductScreen(props) {
    const {handleAddToCart, listCart} = useStore()
    const {slug} = useParams();
    const product = data.products.find((x)=> x.slug === slug)

    useEffect(() => {
        console.log('a')
    }, [product])

    return(
        <div className="productScreen">
            <div className="productScreen_wrap">
                <img src={product.img} alt={product.name} />
                <div className="productScreen_info">
                    <h1>{product.name}</h1>
                    <div className="productScreen_rating">
                        <Rating rating={product.rating} numReview={product.numReview} />
                    </div>
                    <h2>{product.price} VND</h2>
                    <p>{product.description}</p>
                    {
                        (product.countInStock > 0 && (product.countInStock > product.countProduct) ) ?
                        (
                            <button onClick={() => handleAddToCart(product)}>Mua ngay</button>
                        ) : (
                            <button className="out-of-stock">Hết hàng</button>
                        )
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductScreen;