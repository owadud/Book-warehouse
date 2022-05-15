import React from 'react';
import banner3 from '../../Images/Banner/banner3.jpg';

const ExtraSection = () => {
    return (
        <>
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold">Book Lovers</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Reading is good for you because it improves your focus, memory, empathy, and communication skills. It can reduce stress, improve your mental health, and help you live longer. Reading also allows you to learn new things to help you succeed in your work and relationships.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Read More</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Find Books</button>
                    </div>
                </div>
                <div className="overflow-hidden" style={{ maxHeight: "50vh" }}>
                    <div className="container px-5">
                        <img src={banner3} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>


            <div className="container px-4" id="featured-3">
                <h2 className="pb-2 border-bottom">Some Benefits of Books</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">

                        <h2>Gain valuable knowledge</h2>
                        <p>Going beyond the surface of a subject is essential to success, too. This is probably why the author Roald Dahl once said, "If you are going to get anywhere in life, you have to read a lot of books."</p>
                        <a href="#home" className="icon-link">
                            Read more

                        </a>
                    </div>
                    <div className="feature col">

                        <h2>Exercise your brain</h2>
                        <p>Research has confirmed that reading stimulates a complex network of circuits and signals in the brain. Plus, as you improve your reading ability, these networks become stronger and more sophisticated.</p>
                        <a href="#home" className="icon-link">
                            Read more

                        </a>
                    </div>
                    <div className="feature col">

                        <h2>Improve your focus</h2>
                        <p>Being able to concentrate and focus for long periods is essential to our success and wellbeing. Cal Newport, the author of Deep Work,</p>
                        <a href="#home" className="icon-link">
                            Read More

                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExtraSection;