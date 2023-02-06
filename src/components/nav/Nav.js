import React, { useEffect, useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { Link, useNavigate} from 'react-router-dom';
import {BsSearch } from 'react-icons/bs';
import { FaUserAlt } from "react-icons/fa"
import {useAuthState} from 'react-firebase-hooks/auth'
import './nav.css';
import navLogo from '../assest/img/logooo.png';
import { auth, logOut } from '../../firebase';
import { useStore } from '../../store';

function Nav(props) {
    const { listCart} = useStore();
    const [showUser, setShowUser] = useState(false)
    const [searchProduct, setSearchProduct] = useState('')
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const handleOnclickLogo = () => {
        setSearchProduct('')
    }

    const handleSearchProducts = (e) => {
        let search = e.target.value.toLowerCase()
        setSearchProduct(search)
        if(search.length > 0) {
            navigate(`/search/${search}`)
        } else {
            navigate('/')
        }
    }

    const handleShowUser = () => {
        setShowUser(true)
        setTimeout(()=> {
            setShowUser(false)
        }, 3000)
    }

    
    useEffect(() => {

    }, [showUser])

    return (
        <nav>   
            <div className='nav_container'>
                <Link to='/'>
                    <span className='nav_logo' onClick={handleOnclickLogo}>
                        <img src={navLogo} alt='' />
                    </span>
                </Link>
                <div className='nav_wrap'>
                    <div className='nav_search'>
                        <input 
                            type='text' 
                            placeholder='Tìm kiếm sản phẩm...'
                            onChange={handleSearchProducts}
                            value={searchProduct}
                            className="nav_search-input"
                        />
                        <BsSearch className='nav_search-icon' />
                    </div>
                    <Link to='/cart'>
                        <BiShoppingBag className='nav_cart' />
                        <span className="nav_cart-amount">{listCart.length}</span>
                    </Link>

                    {user ? (
                        <div className='nav_user'>
                            <FaUserAlt className='user_icon' onClick={handleShowUser}/>

                            {
                                showUser && (
                                    <div className='nav_user-logout'>
                                        <p>{user.displayName}</p>
                                        <button onClick={() => logOut()}>LogOut</button>
                                    </div>
                                )
                            }
                        </div>

                    ) : (
                        <Link to="login" className='login'>
                            <button className='btn-login'>Sign In</button>
                        </Link>
                    )}
                    
                </div>
            </div>
        </nav>
    );
}

export default Nav;