import React from 'react';
import Footer from '../footer/Footer';
import './content.css';
import Products from './products/Products';
import Slider from './slider/Slider';
function Content(props) {
    return (
        <main >
            <div className='content'>
                <Slider />
                <Products />
                <Footer />
            </div>
        </main>
    );
}

export default Content;