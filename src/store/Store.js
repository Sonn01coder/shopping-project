import React, { useEffect, useState } from 'react';
import {IoMdAddCircleOutline, IoMdRemoveCircleOutline} from "react-icons/io"
import {BsTrash} from "react-icons/bs"
import './store.css';
import { useStore } from './hook';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Store(props) {
    const { listCart, setListCart} = useStore();
    const [totalPay, setTotalPay] = useState(0);
    const [user] = useAuthState(auth)
    
    const handlePrice = () => {
        let sum =0;
        listCart.map((product) => {sum += product.price * product.countProduct})
        setTotalPay(sum)
    }

    const handleCount = (product, d) => {
       const ind = listCart.indexOf(product)
       const arr = listCart;
       arr[ind].countProduct += d
       if(arr[ind].countProduct === 0) arr[ind].countProduct = 1
       if(arr[ind].countProduct > arr[ind].countInStock) arr[ind].countProduct = arr[ind].countInStock;
       setListCart([...arr])
    }
    
    const handleRemove = (product) => {
        const newCart = listCart.filter(item => item._id !==  product._id)
        setListCart(newCart)
    }

    useEffect(()=>{
        handlePrice()
    }, [listCart]);


    return (
        <div className='store'>
            <h1 className='store_title'>Giỏ hàng của tôi</h1>
            <div id='store_list'>
                { 
                    listCart.length > 0 ?
                    (
                        listCart.map(product => (
                            <div className='store_item' key={product._id}>
                                <img src={require(product.img)} alt={product.name} className="store_img"/>
                                <p className='store_name'>{product.name}</p>
                                <div className='store_count'>
                                    <IoMdRemoveCircleOutline 
                                        className='store_remove-product'
                                        onClick={() => handleCount(product , -1)}
                                    />
                                    <p className='store_product-number'>{product.countProduct}</p>
                                    <IoMdAddCircleOutline 
                                        className='store_add-product' 
                                        onClick={() => handleCount(product , +1)}
                                    />
                                </div>
    
                                <span >
                                    <BsTrash className='store_delete-product' onClick={() => handleRemove(product)} />
                                </span>
                            </div>
                        ))
                    ) : (
                        <div className='store_null'>
                            <p>Giỏ của bạn chẳng có cái gì cả: </p>
                            <Link to="/" className='store_null-link'> MUA NGAY</Link>
                        </div>
                    )
                }
            </div>
            {
                listCart.length > 0 ? 
                (
                    <div className='store_pay'>
                        <p>Tổng cộng: {totalPay} VND</p>
                        <Link to={user ? "/payment" : "/login"} >
                            <button>Thanh Toán Ngay</button>
                        </Link>
                    </div>
                ) : (
                    <span></span>
                )
            }
        </div>
    );
}

export default Store;
    