import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    
    useEffect(() => {

        const url = `http://localhost:5000/books/update/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [productId]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/books/update/${id}`;

            fetch(url,{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(result=>{
                setProduct('');
                console.log(result);
            })
        }
        toast('Successfully deleted');
    }

    return (
        <div>

            <div className='text-center'>
                
                <h2>Supplier: {product.supply}</h2>
                <h2>Email: {product.email}</h2>
                <h2>Phone: {product.phone}</h2>
                <h2>Amount: {product.quantity}</h2>
                <Link to="/delivered">
                    <button className='btn btn-primary'>Delivered</button>
                </Link>
                
                <button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete</button>
               
            </div>
            <ToastContainer/>
        </div>
    );
};

export default UpdateProduct;