import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {TiShoppingCart} from "react-icons/ti";
import './searchProduct.css'
import Rating from '../components/content/products/Rating';
import { useStore } from '../store';
import data from '../data';


function SearchProduct() {
    const location = useLocation()
    const stringLocation = location.pathname
    const {handleAddToCart} = useStore();

    
    const filteredProducts = data.products.filter((product) => {
        if (
            product.name.toLowerCase().includes(stringLocation.slice(8).replace("%20", " ")) ||
            product.slug.toLowerCase().includes(stringLocation.slice(8).replace("%20", " ")) ||
            product.brand.toLowerCase().includes(stringLocation.slice(8).replace("%20", " ")) ||
            product.category.toLowerCase().includes(stringLocation.slice(8).replace("%20", " "))
          ) {
            return product;
          }                
    })

    return (
            <div className='searchProduct_container'>
                    {
                        filteredProducts && filteredProducts.length > 0 ?
                        (   
                            <div className='searchProduct_list'>
                            {filteredProducts.map ((product) => (
                            <div key={product.slug} className="searchProduct_item">
                                <Link to={`/product/${product.slug}`}> 
                                    <img src={require(product.img)} alt={product.name} />
                                </Link>
                                <div className='searchProduct_info'>
                                    <Link to={`/product/${product.slug}`}>
                                        <p className='searchProduct_name'>{product.name}</p>
                                    </Link>
                                    <Rating rating={product.rating} numReview={product.numReview} />
                                        <p className='searchProduct_price'>
                                        <strong>{product.price} VND</strong>
                                        </p>
                                    {
                                        (product.countInStock > 0 && (product.countInStock > product.countProduct)) ?
                                        (
                                            <button className='searchProduct_btn-shopping' onClick={() => handleAddToCart(product)} >
                                                <p className='searchProduct_shopping-des'>Mua ngay</p> 
                                                <TiShoppingCart className='searchProduct_shopping-icon' />
                                            </button>
                                        ) : (
                                            <button className="searchProduct_btn-outOfStock">Hết hàng</button>
                                        )
                                        
                                    }
                                </div>
                            </div>
                        ))}
                        </div>
                        )  : (
                            <p className='no_results'>Không tìm thấy sản phẩm phù hợp yêu cầu của bạn!</p>
                        )
                    }
            </div>
         
    );
}

export default SearchProduct;