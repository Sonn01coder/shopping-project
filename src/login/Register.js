import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './register.css';
import {validation} from './validation';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Loading from '../components/loading/Loading';
import { useEffect } from 'react';

function Register(props) {

    const navigate = useNavigate()

    const [userName , setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})
    const [check, setCheck] = useState(0)

    useEffect(()=> {
        if(check > 0) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }
   }, [check])
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setError(validation({userName, email, password}))
        createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            setCheck(check+1)
            setTimeout(()=> {
                navigate("/shopping-project")
            }, 2000) 
          if(auth.currentUser) {
            updateProfile(auth.currentUser, {
              displayName: userName,
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }

    return (
        <div className='register_container'>
            { loading ? <Loading />:<p></p>}
            <div className='register_wrap' >
                <p>ĐĂNG KÍ TÀI KHOẢN</p>
                <form>
                    <div className='register_name'>
                        <label className='label'>Name</label>
                        <input 
                            type='text' 
                            className='register_input' 
                            placeholder='Nhập tên của bạn (Tối đa 8 kí tự)'
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            name='userName'
                        />
                        {error.userName && <p id='error'>{error.userName}</p>}
                    </div>

                    <div className='register_email'>
                        <label className='label'>Email</label>
                        <input 
                            type='email' 
                            className='register_input' 
                            placeholder='abc123@gmail.com'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            name='email'
                        />
                        {error.email && <p id='error'>{error.email}</p>}
                    </div>

                    <div className='register_password'>
                        <label className='label'>Password</label>
                        <input 
                            type='password' 
                            className='register_input' 
                            placeholder='Mật khẩu của bạn(Tối thiêu 6 kí tự)' 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            name="password"
                        />
                        {error.password && <p id='error'>{error.password}</p>}
                    </div>

                    <div >
                        <button className='register_submit' onClick={handleFormSubmit}>
                            Đăng kí
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;