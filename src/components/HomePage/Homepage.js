import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Homepage.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FAQ from '../FAQ/FAQ';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClipboardList} from '@fortawesome/free-solid-svg-icons';
toast.configure()


const Homepage = () => {
    
    const [products, setProducts] = useState([]);
    const [time, setTime] = useState(0);
    const [breakTime, setBreakTime] = useState(0);   

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const getStoredData = addToDB();        
        setBreakTime(getStoredData);
    }, [])

    const handleAddToList = (schedule) => {
        const {heading, picture, about, timeRequired} = schedule;
        const newTime = time + timeRequired;
        setTime(newTime);
    }

    const addBreakTime = (event) => {
        const time = event.target.innerText;
        const number = time.match(/(\d+)/);        
        if (number) {            
            addToDB(number[0]);
        }        
    }

    const addToDB = (time) => {        
        let dataBaseObject;
        const storedBreakTime = localStorage.getItem('break-Time-Store');
        if(storedBreakTime){
            dataBaseObject = JSON.parse(storedBreakTime);
            if(time){
                dataBaseObject.breakTime = parseInt(time);
                setBreakTime(dataBaseObject.breakTime);
            }                 
        }
        else{
            dataBaseObject = {breakTime: 15};
            if(time){
                dataBaseObject.breakTime = parseInt(time);
                setBreakTime(dataBaseObject.breakTime);
            }
        }        
        localStorage.setItem('break-Time-Store', JSON.stringify(dataBaseObject));
        return dataBaseObject.breakTime;
    }

    const notify = () => {
        toast('Mission Completed. This project put me in big trouble. Atleast It is completed. WOW!');
    }

    return (
        <div>
            <div className='row m-1'>
                <div className='col-6 col-md-7 col-lg-9'>
                    
                    <h1 className='my-4'><FontAwesomeIcon icon={faClipboardList} size='1x'></FontAwesomeIcon> <span> </span> Daily Routine</h1>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4' >
                        {
                            products.map(product => <Product 
                                key = {product.id} 
                                product = {product}
                                addToList = {handleAddToList}                            
                                ></Product>)
                        }  
                    </div>
                </div>

                <div className='col-6 col-md-5 col-lg-3'>
                    <div>
                        <div className='row mb-2'>
                            <img className='col-5 col-md-4 col-lg-3 img-fluid rounded-circle' src="https://i.ibb.co/SwYBKGB/Asad-Photo-1.jpg" alt="" />
                            <div className='col-7 pt-3 ps-0'>
                                <h6>
                                    Asad
                                </h6>
                                <p> Demra, Dhaka </p>
                            </div>
                        </div>
                        <div className='bg-secondary bg-opacity-25 d-flex justify-content-around text-center pt-2'>
                            <div>
                                <p><span className='h1'>71</span> kg </p>
                                <p> Weight </p>
                            </div>

                            <div>                            
                                <p> <span className='h1'>5.6</span> ft </p>
                                <p>Height</p>
                            </div>

                            <div>
                                <p><span className='h1'>29</span> yrs </p>
                                <p>Age</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='mt-4'>
                        <h5>
                            Add A break 
                        </h5>
                        <div className='btn-group bg-secondary bg-opacity-50 w-100'>
                            <a href='#' onClick={addBreakTime} className='forFocus text-decoration-none rounded-circle py-1 px-1 my-2 mx-auto'>10m</a>
                            <a href='#' onClick={addBreakTime} className='forFocus text-decoration-none rounded-circle py-1 px-1 my-2 mx-auto'>20m</a>
                            <a href='#' onClick={addBreakTime} className='forFocus text-decoration-none rounded-circle py-1 px-1 my-2 mx-auto'>30m</a>
                            <a href='#' onClick={addBreakTime} className='forFocus text-decoration-none rounded-circle py-1 px-1 my-2 mx-auto'>40m</a>
                            <a href='#' onClick={addBreakTime} className='forFocus text-decoration-none rounded-circle py-1 px-1 my-2 mx-auto'>50m</a>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <h5 className='mb-4'> Schedule Details </h5>
                        <div className='d-flex justify-content-between'>
                            <h6> Schedule Time </h6>
                            <p> {time} Minutes </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h6> Break Time (Default: 15) </h6>
                            <p> {breakTime} Minutes </p>
                        </div>
                    </div>

                    <button onClick={notify} type="button" className='btn btn-primary rounded-circle w-100'>Activity Completed</button>
                </div>
            </div>

            {/* Question And Answer Part */}
            <div className='mt-4 pt-5'>
                <FAQ></FAQ>
            </div>
        </div>
        
    );
};

export default Homepage;