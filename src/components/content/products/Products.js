import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import {TiShoppingCart} from "react-icons/ti";
import data from '../../../data'
import Rating from './Rating';
import { useStore } from '../../../store';

function Products(props) {
    const {handleAddToCart} = useStore();

    return (
        <div className='products_container'>
            <div className='products_list'>
                {
                    data.products.map ((product) => (
                        <div key={product.slug} className="product_item">
                            <Link to={`/product/${product.slug}`}> 
                                <img src={product.img} />
                            </Link>
                            <div className='product_info'>
                                <Link to={`/product/${product.slug}`}>
                                    <p className='product_name'>{product.name}</p>
                                </Link>
                                <Rating rating={product.rating} numReview={product.numReview} />
                                <p className='product_price'>
                                    <strong>{product.price} VND</strong>
                                </p>
                                {
                                    ((product.countInStock > 0) && (product.countInStock > product.countProduct)) ?
                                    (
                                        <button className='product_btn-shopping' onClick={() => handleAddToCart(product)} >
                                        <p className='product_shopping-des'>Mua ngay</p> 
                                        <TiShoppingCart className='product_shopping-icon' />
                                        </button>
                                    ) : (
                                        <button className="product_btn-outOfStock">Hết hàng</button>
                                    )
                                }
                            </div>
                        </div>
                    ))  
                }
            </div>
        </div>
    );
}

export default Products;