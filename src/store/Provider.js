import { useEffect, useState } from "react";
import Context from "./Context";

const cartLocalStorage = JSON.parse(localStorage.getItem("cart")|| "[]")

function Provider({ children }) {
    const [cart, setCart] = useState(cartLocalStorage);
    const [totalPay, setTotalPay] = useState(0);

    const handleAddToCart = (product) => {
        for (const item of cart) {
            if(item._id === product._id) {
                item.countProduct += 1;
                setCart(cart);
                return;
            }
            
        } 
        setCart([...cart, product])
    }
    
    const handlePrice = () => {
        let sum = 0;
        listCart.map((product) => {sum += product.price * product.countProduct})
        setTotalPay(sum)
    }
    useEffect (() => {
        localStorage.setItem('cart', JSON.stringify(cart))
        handlePrice()
    }, [cart]) 
    
    const listCart = cart;
    const setListCart = setCart;
    const initPrice = totalPay;
    return (
        <Context.Provider value={{handleAddToCart, listCart, setListCart, initPrice}}>
            {children}
        </Context.Provider>
    );
}

export default Provider;