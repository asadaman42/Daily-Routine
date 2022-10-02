import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Homepage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    return (
        <div className='row m-2'>
            <div className='col-6 col-md-8 col-lg-8'>
                <h1>Daily Routine</h1>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4' >
                    {
                        products.map(product => <Product 
                            key = {product.id} 
                            product = {product}
                            ></Product>)
                    }  
                </div>
            </div>

            <div className='col-6 col-md-4 col-lg-4'>
                <h1>This is Cart</h1>
            </div>
        </div>
    );
};

export default Homepage;