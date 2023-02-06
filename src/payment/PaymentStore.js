import React, { useEffect, useState } from 'react';
import './payment.css'
import {checkPayment} from './checkPayment'
import { useStore } from '../store/hook';
import { Link } from 'react-router-dom';

function PaymentStore() {
    const [nameUser, setNameUser] = useState("")
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState({})
    const {initPrice} = useStore();

    const handleOnPay = () => {
        setError(checkPayment({nameUser, email, phoneNumber, address}))
        localStorage.clear()
         console.log('clear payment')
    }

    useEffect(() => {

    }, [])

    return (
        <div className='pay'>
            <div className='payment_container'>
                <div className='payment_address'>
                        <p>THÔNG TIN GIAO HÀNG</p>
                        <form>
                        <div className='payment_address-name payment_input'>
                            <input type='text' 
                                className='payment_address-input' 
                                placeholder='* Họ và tên'
                                name="nameUser"
                                value={nameUser} 
                                onChange={e => setNameUser(e.target.value)}
                            />
                            { error.nameUser && <p id="errorPayment">{error.nameUser}</p> }
                        </div>

                        <div className='payment_address-email payment_input'>
                            <input type='text' 
                                className='payment_address-input' 
                                placeholder='* Email'
                                name="email"
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                            />
                            { error.email && <p id="errorPayment">{error.email}</p> }
                        </div>

                        <div className='payment_address-phone payment_input'>
                            <input type='text' 
                                className='payment_address-input' 
                                placeholder='* Số điện thoại nhận hàng' 
                                name='phoneNumber'
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                            { error.phoneNumber && <p id="errorPayment">{error.phoneNumber}</p> }
                        </div>

                        <div className='payment_address-address payment_input'>
                            <input type='text' 
                                className='payment_address-input' 
                                placeholder='* Địa chỉ nhận hàng' 
                                name='address'
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                            { error.address && <p id="errorPayment">{error.address}</p> }
                        </div>
                        </form>

                        <span>(*) là trường không được để trống</span>
                </div>

                <div className='payment_wrap'>
                    <div className='payment_pay'>
                        <p>PHƯƠNG THỨC THANH TOÁN</p>

                        <div className='payment_pay-wrap'>
                            <div className='payment_pay-div'>
                                <input type="radio" id='pay_card' className='payment_pay-item' name='payments'/> 
                                <label htmlFor="pay_card" >Thanh toán thẻ (visa, atm,...)</label>
                            </div>

                            <div className='payment_pay-div'>
                                <input type="radio" id='pay_viettelmoney' className='payment_pay-item' name='payments'/> 
                                <label htmlFor="pay_viettelmoney" >Thanh toán bằng viettel money</label>
                            </div>

                            <div className='payment_pay-div'>
                                <input type="radio" id='pay_cod' className='payment_pay-item' name='payments'/> 
                                <label htmlFor="pay_cod" >Thanh toán khi nhận (COD)</label>
                            </div>
                        </div>
                    </div>

                    <div className='payment_confirm'>
                        <div className='payment_voucher'>
                            <span className='payment_voucher-title'>MÃ GIẢM GIÁ</span>
                            <div className='payment_voucher-input'>
                                <input type='text' placeholder='Nhập mã giảm giá của bạn' />
                                <button>Áp dụng</button>
                            </div>
                            <div className='payment_init'>
                                <div className='payment_sum pay_init-item'>
                                    <p>Đơn hàng</p>
                                    <span>{initPrice} VND</span>
                                </div>
                                <div className='payment_endow pay_init-item'>
                                    <p>Ưu đãi</p>
                                    <span>0 VND</span>
                                </div>
                                <div className='payment_ship pay_init-item'>
                                    <p>Phí ship</p>
                                    <span>20000 VND</span>
                                </div>
                                <div className='payment_into-money pay_init-item'>
                                    <p>Thành tiền</p>
                                    <span>{initPrice - 20000} VND</span>
                                </div>
                            </div>
                        </div>

                        <Link to={(error.nameUser && error.email && error.phoneNumber && error.address) ? '/success' : ''  }>
                             <button className='payment_done' onClick={handleOnPay}>Hoàn tất đơn hàng</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentStore;