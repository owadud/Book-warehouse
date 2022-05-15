import React from 'react';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { Button } from 'react-bootstrap';
import './Social.css';


const Social = () => {
   
        const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
       
        const navigate = useNavigate();
        const location = useLocation();
        let from = location.state?.from?.pathname || "/";
        
        let errorElement;
    
        if(loading){
            return <Loading></Loading>
        }
    
        if (error) {
            errorElement = <p className='text-danger bg-light fw-bold mt-2 p-1'>Error: {error?.message}</p>
        }
    
        if (user) {
            navigate(from, { replace: true });
        }
    
        return (
            <div>
                <div className='text-center mt-2 text-light bg-dark p-2'>
                    <h5 className='fw-bold'>Login with your Gmail Account</h5>
                </div>
                {errorElement}
                <div className='google'>
                    <Button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-success w-50 d-block mx-auto my-2'>
                       
                        <span className='px-2'>Google Sign In</span>
                    </Button>
                   
                    
                </div>
            </div>
        );
    };

export default Social;
