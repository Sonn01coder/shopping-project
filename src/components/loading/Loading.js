import React from 'react';
import RingLoader from 'react-spinners/RingLoader';
import './loading.css'

function Loading(props) {
    
    return (
        <div className='loadingGlobal'>
             <RingLoader color={'#b52195'}  size={150}/> : 
        </div>
    );
}

export default Loading;