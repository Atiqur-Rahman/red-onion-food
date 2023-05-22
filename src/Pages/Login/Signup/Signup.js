import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

import logo from '../../../images/logo2.png';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const Signup = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmRef = useRef('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const navigate = useNavigate();
    let errorMessage;

    if (loading || updating) {
        return <Loading></Loading>;
    }

    if (user) {
        console.log(user);
    }

    const handleSignup = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmRef.current.value;

        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            navigate('/');

            if (error || error1) {
                errorMessage = (
                    <p style={{ color: 'red' }} className="text-center mt-2">
                        Error: {error?.message} {error?.message}
                    </p>
                );
            }
        }
        // console.log(name);
        // console.log(email);
        // console.log(password);
        // console.log(confirmPassword);
        // console.log(user);
    };
    return (
        <div className="mx-auto" style={{ width: '350px', marginTop: '100px' }}>
            <img className="w-50 mb-5 mx-auto d-block" src={logo} alt="" />
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} className="height" type="name" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} className="height" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} className="height" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control ref={confirmRef} className="height" type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Button style={{ width: '350px', height: '50px', backgroundColor: 'red' }} className="border border-0" type="submit">
                    Signup
                </Button>

                {errorMessage}

                <p style={{ color: 'red' }} className="text-center mt-2">
                    <small>
                        Already have an account.
                        <Link to="/login" className="text-decoration-none ps-1 fw-medium">
                            Login
                        </Link>
                    </small>
                </p>
            </Form>
        </div>
    );
};

export default Signup;
