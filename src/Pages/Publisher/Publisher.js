import React, { useEffect, useState } from 'react';
import PublisherDetails from '../PublisherDetails/PublisherDetails';
import './Publisher.css';

const Publisher = () => {
    const [publishers, setPublisher] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setPublisher(data));
    }, [])

    return (
        <div id="services" className='container mb-4'>
        <div className="row">
        <h1 className='text-primary text-center mt-5'>Choose Your Plan </h1>
        <div className="publisher-container mt-5 ">
        {
            publishers.map(publisher => <PublisherDetails
                key={publisher._id}
                publisher={publisher}
            >
            </PublisherDetails>)
        }
        </div>
        </div>
    </div>
    );
};

export default Publisher;