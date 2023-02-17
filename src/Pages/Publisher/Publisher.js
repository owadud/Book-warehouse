import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PublisherDetails from '../PublisherDetails/PublisherDetails';
import './Publisher.css';

const Publisher = () => {
    const [publishers, setPublisher] = useState([]);

    useEffect(() => {
        fetch('https://bookwarehouse.onrender.com/books')
            .then(res => res.json())
            .then(data => setPublisher(data));
    }, [])

    return (
        <div id="services" className='container mb-4'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'>Publisher Collection</h1>
                <div className="publisher-container mt-5 ">
                    {
                        publishers.map(publisher => <PublisherDetails
                            key={publisher._id}
                            publisher={publisher}
                        >
                        </PublisherDetails>)
                    }

                </div>
                <Link to="/publisher" className='text-center'>
                    <button className='btn btn-primary fw-bold'>Show All Publisher</button>
                </Link>
            </div>
        </div>
    );
};

export default Publisher;