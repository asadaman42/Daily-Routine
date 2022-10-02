import React from 'react';

const Product = (props) => {

    const {heading, picture, about, timeRequired} = props.product;
    
    return (
        <div className='col'>
            <div className='card h-100'>
                <img className='img-fluid card-img-top' src={picture} alt=''></img>
                <div className='card-body'>
                    
                    <h1 className='card-title'>{heading}</h1>
                    <p className='card-text'>{about}</p>
                    <p>Time Required: {timeRequired} minutes </p>
                    
                </div>
                <button className='btn btn-primary w-100'>Add to List</button>
            </div>
        </div>
    );
};

export default Product;