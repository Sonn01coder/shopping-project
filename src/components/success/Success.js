import React from 'react';
import { Link } from 'react-router-dom';
import './success.css'

function Success(props) {
    return (
        <div className='success'>
            <div className='success_container'>
                <div className='success_title'>Bạn đã đặt hàng thành công</div>
                <p >Chúng tôi sẽ liên lạc với bạn thông qua số điện thoại để xác nhận lại đơn hàng</p>
                <span>Xin chân thành cảm ơn!</span>
                <Link to="/shopping-project">
                    <button>Tiếp tục mua hàng</button>
                </Link>
            </div>
        </div>
    );
}

export default Success;