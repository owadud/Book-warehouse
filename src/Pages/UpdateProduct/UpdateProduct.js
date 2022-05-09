import React, { useEffect, useState } from 'react';
import {  useParams,Link } from 'react-router-dom';

const UpdateProduct = () => {
    const { productId } = useParams();
    // const [product, setProduct]=useState({});

    // useEffect(() => {

    //     const url = `http://localhost:3000/service/${productId}`;

    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data => setProduct(data))

    // },[])
    return (
        <div>
            <h2>Welcome to detail: {productId}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default UpdateProduct;