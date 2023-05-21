import React from 'react';
import { Button, Form } from 'react-bootstrap';

import logo from '../../images/logo2.png';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="mx-auto" style={{ width: '350px', marginTop: '100px' }}>
            <img className="w-50 mb-5 mx-auto d-block" src={logo} alt="" />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control className="height" type="name" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className="height" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className="height" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control className="height" type="confirmPassword" placeholder="Confirm Password" />
                </Form.Group>
                <Button style={{ width: '350px', height: '50px', backgroundColor: 'red' }} className="border border-0" type="submit">
                    Signup
                </Button>
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
