import React from 'react';

const Schedule = () => {
    return (
        <div>

            <div>
                <img src="" alt="" />
                <div>
                    <h6>
                        Asad
                    </h6>
                    <p> Demra, Dhaka </p>
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
                <div class="btn-group bg-secondary w-100">
                    <a className='text-decoration-none bg-primary text-white rounded-circle py-1 px-1 my-2 mx-auto'>10m</a>
                    <a className='text-decoration-none bg-primary text-white rounded-circle py-1 px-1 my-2 mx-auto'>20m</a>
                    <a className='text-decoration-none bg-primary text-white rounded-circle py-1 px-1 my-2 mx-auto'>30m</a>
                    <a className='text-decoration-none bg-primary text-white rounded-circle py-1 px-1 my-2 mx-auto'>40m</a>
                    <a className='text-decoration-none bg-primary text-white rounded-circle py-1 px-1 my-2 mx-auto'>50m</a>
                </div>
            </div>
            <div className='mt-4'>
                <h5> Exercise Details </h5>
                <div className='d-flex justify-content-between'>
                    <h6> Exercise Time </h6>
                    <p> 0 Minutes </p>
                </div>
                <div className='d-flex justify-content-between'>
                    <h6> Break Time </h6>
                    <p> 0 Minutes </p>
                </div>
            </div>
            <button type="button" class="btn btn-primary rounded-circle w-100">Activity Completed</button>
            
        </div>
    );
};

export default Schedule;