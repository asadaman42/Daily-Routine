import React, { useState } from 'react';

const Product = ({addToList, product}) => {

    const [buttonText, setButtonText] = useState("Add to List");
    
    const {heading, picture, about, timeRequired} = product;
    
    return (
        <div className='col'>
            <div className='card h-100'>
                <img className='img-fluid card-img-top' src={picture} alt=''></img>
                <div className='card-body'>                    
                    <h1 className='card-title'>{heading}</h1>
                    <p className='card-text'>{about}</p>
                    <p>Time Required: {timeRequired} minutes </p>                    
                </div>
                <button className='btn btn-primary w-100' onClick={() => {addToList(product); setButtonText('Added')}}>{buttonText}</button>
            </div>
        </div>
    );
};

export default Product;