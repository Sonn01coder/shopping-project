import {signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../components/loading/Loading';
import { useEffect } from 'react';

function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [check, setCheck] = useState(0)
    const navigate = useNavigate()

    useEffect(()=> {
        if(check > 0) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }
   }, [check])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(() => { 
            setCheck(check+1)
            setTimeout(()=> {
                navigate("/shopping-project")
            }, 2000)  
        }) 
        .catch(() => {
            toast.error("Địa chỉ email hoặc mật khẩu không chính xác!")
        })
    }
    
    return (
        <>
        <ToastContainer />
       { loading ? <Loading />:<p></p>}
        <div className='login_container'>
            <div className='login_wrap' >
                <p>ĐĂNG NHẬP</p>
                <form>
                    <div className='login_email'>
                        <label className='label'>Email</label>
                        <input 
                            type='email' 
                            className='login_input' 
                            placeholder='abc123@gmail.com'
                            name='email'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div className='login_password'>
                        <label className='label'>Password</label>
                        <input 
                            type='password' 
                            className='login_input' 
                            placeholder='Mật khẩu của bạn' 
                            name='password' 
                            value={password}
                            onChange={e=> setPassword(e.target.value)}
                        />
                    </div>

                    <div >
                        <button className='register_submit' onClick={handleFormSubmit}>
                            Đăng nhập
                        </button>
                    </div>
                </form>

                <div className='login_footer'>
                    <span>Nếu bạn chưa có tài khoản, hãy</span>
                    <Link to='/register'>Đăng kí ngay</Link>
                </div>
            </div>
        </div>
        </>

    );
}

export default Login;