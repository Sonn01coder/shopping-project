export const checkPayment = ({nameUser, email, phoneNumber, address}) => {
    
    let error = {}

    if(!nameUser) {
        error.nameUser = "Nhập tên người nhận"
    } 

    if(!email) {
        error.email = "Nhập email người nhận"
    } else if(!/\S+@\S+\.\S+/.test(email)) {
        error.email = "Email không chính xác"
    }

    if(!phoneNumber) {
        error.phoneNumber = "Nhập số điện thoại người nhận" 
    } else if(!/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(phoneNumber)){
        error.phoneNumber = "Số điện thoại không hợp lệ"
    }

    if(!address) {
        error.address = "Nhập địa chỉ nhận hàng"
    }

    return error
}

