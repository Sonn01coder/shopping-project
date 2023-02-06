import React, { useEffect, useState } from 'react';
import './slide.css';
import slideImg1 from '../../assest/img/slideImg1.png';
import slideImg2 from '../../assest/img/slideImg6.jpg';
import slideImg3 from '../../assest/img/slideImg3.png';
import slideImg4 from '../../assest/img/slideImg4.png';

function Slider(props) {
    const [countIndex, setCountIndex] = useState(0);
    const [allImg, setAllImg] = useState([slideImg1, slideImg2, slideImg3, slideImg4]);
    
    useEffect(() => {
        setInterval(() => {
            setCountIndex(countIndex => ((countIndex < 3)  ? (countIndex + 1) : 0))
        }, 4000)   
    }, [])
    return (
        <div className='slider'>
            <div className='slider_container'>
                <img src={allImg[countIndex]} />
            </div>
        </div>
    );
}

export default Slider;