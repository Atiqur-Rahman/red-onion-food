import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../../../images/logo2.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let errorElement;

    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
        console.log(user);
    };

    if (loading || sending) {
        return <Loading></Loading>;
    }

    if (error) {
        errorElement = (
            <p style={{ color: 'red' }} className="text-center mt-2">
                Error: {error?.message}
            </p>
        );
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent');
        } else {
            toast('Please enter your email address');
        }
    };
    return (
        <div className="mx-auto" style={{ width: '350px', marginTop: '90px' }}>
            <img className="w-50 mb-5 mx-auto d-block" src={logo} alt="" />
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} className="height" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} className="height" type="password" placeholder="Password" />
                </Form.Group>
                <Button style={{ backgroundColor: 'red', width: '350px' }} className="border border-0 height" type="submit">
                    Login
                </Button>
            </Form>
            <p className="my-0">
                <small>Forget password?</small>
                <button onClick={resetPassword} className="btn btn-link ps-2">
                    <small>Reset password</small>
                </button>
            </p>
            {errorElement}
            <p style={{ color: 'red' }} className="text-center mt-2">
                <small>
                    Don't have an account.
                    <Link to="/signup" className="text-decoration-none ps-1 fw-medium">
                        Signup
                    </Link>
                </small>
            </p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
