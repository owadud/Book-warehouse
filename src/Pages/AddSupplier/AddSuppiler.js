import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddSupplier = () => {
    const { register, handleSubmit } = useForm();
    const [value,setValue] =useState();

    const onSubmit = data =>{
        console.log(data);
        const url = `http://localhost:5000/books`;
        
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            setValue('');
        })
        toast("New Supplier Added");
    };
    

    return (
        <div className='w-50 mx-auto'>

        <h2>Please add a Supplier</h2>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

            <input className='mb-2' value={value} placeholder='Publisher' {...register("supply", { required: true, maxLength: 20 })} required/>
            <textarea className='mb-2' value={value} placeholder='Description' {...register("description")} required />
            <input className='mb-2' value={value} placeholder='Price' type="number" {...register("price")}  required/>
            <input className='mb-2' value={value} placeholder='Email' type="text" {...register("email")}  required/>
            <input className='mb-2' value={value} placeholder='Phone Number' type="number" {...register("phone")}  required/>
            <input className='mb-2' value={value} placeholder='Quantity' type="number" {...register("quantity")}  required/>
            <input className='mb-2' value={value} placeholder='Photo URL' type="text" {...register("picture")} required />
            <input type="submit" value="Add supplier" />
        </form>
        <ToastContainer />
    </div>
    );
};

export default AddSupplier;