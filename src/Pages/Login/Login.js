import React from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="mx-auto" style={{ width: '350px', marginTop: '90px' }}>
            <img className="w-50 mb-5 mx-auto d-block" src={logo} alt="" />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className="height" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className="height" type="password" placeholder="Password" />
                </Form.Group>
                <Button style={{ width: '350px', height: '50px', backgroundColor: 'red' }} className="border border-0" type="submit">
                    Login
                </Button>
                <p style={{ color: 'red' }} className="text-center mt-2">
                    <small>
                        Don't have an account.
                        <Link to="/signup" className="text-decoration-none ps-1 fw-medium">
                            Signup
                        </Link>
                    </small>
                </p>
            </Form>
        </div>
    );
};

export default Login;
