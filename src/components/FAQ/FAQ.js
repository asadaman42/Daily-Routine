import React from 'react';

const FAQ = () => {
    return (
        <div>
            <section className="container">

                <div>
                    <h2 className="text-center">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-center">
                        There are something you might want to know. Which are not more important also not less important. 
                    </p>
                </div>

                <div className="accordion px-lg-5" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                01 - How does Ract work? 
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <p>
                                    React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            02 - The difference between 'Props' and 'State'.
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <p>
                                    Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                03 - Where to use 'useEffect' excepts data load?  
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <ul>
                                    <li>Running on <strong>state change</strong>: validating input field</li>
                                    <li>Running on <strong>state change</strong>: live filtering</li>
                                    <li>Running on <strong>state change</strong>: trigger animation on new array value</li>
                                    <li>Running on <strong>props change</strong>: update paragraph list on fetched API data update</li>
                                    <li>Running on <strong>props change</strong>: updating fetched API data to get BTC updated price</li>
                                </ul>                                                        
                            </div>
                        </div>
                    </div>                    
                </div>
            </section>
        </div>
    );
};

export default FAQ;