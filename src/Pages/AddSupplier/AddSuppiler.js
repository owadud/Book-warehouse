import React from 'react';
import { useForm } from 'react-hook-form';

const AddSupplier = () => {
    const { register, handleSubmit } = useForm();

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
        })
    };
    

    return (
        <div className='w-50 mx-auto'>

        <h2>Please add a Supplier</h2>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

            <input className='mb-2' placeholder='Name' {...register("supply", { required: true, maxLength: 20 })} />
            <textarea className='mb-2' placeholder='Description' {...register("description")} />
            <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
            <input className='mb-2' placeholder='Photo URL' type="text" {...register("picture")} />
            <input type="submit" value="Add supplier" />
        </form>
    </div>
    );
};

export default AddSupplier;