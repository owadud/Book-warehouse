import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.config';
import Loading from '../Loading/Loading';
import Social from '../Social/Social';
import 'react-toastify/dist/ReactToastify.min.css';
import './Login.css';
import { ToastContainer,toast } from 'react-toastify';



function Login() {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/signup');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Check your email');
        }
        else{
            toast('You did not enter your email. Please enter your email address');
        }
    }
    return (
      
             <div className='container w-50 mx-auto login bg-dark p-4'>
            <h2 className='text-light bg-info text-center mt-2 p-2'>Please Login or Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="success w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
                <Button variant="success w-50 mx-auto d-block mb-2" type="submit">
                <Link to="/signup" className='text-light pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link>
                </Button>
            </Form>
            {errorElement}
           
            <p className='text-info'>Forget Password? <Button className='forget btn btn-warning text-light pe-auto text-decoration-none' onClick={resetPassword} >Reset Password</Button> </p>
             <Social></Social>
             <ToastContainer />
           
        </div>
       
    )
}

export default Login;
