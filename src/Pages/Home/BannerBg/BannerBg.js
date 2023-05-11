import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './BannerBg.css';

const BannerBg = () => {
    return (
        <div>
            <div className=" background d-flex justify-content-center">
                <div style={{ paddingTop: '200px' }}>
                    <h1 className="text-center mb-4" style={{ fontSize: '56px' }}>
                        Best food waiting for your belly
                    </h1>
                    <Form className="d-flex mx-auto search">
                        <Form.Control type="search" placeholder="Search food items" className="border border-end-0 rounded-pill " aria-label="Search" />
                        <Button variant="" style={{ backgroundColor: 'red', padding: '0 40px' }} className="rounded-pill text-white">
                            Search
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default BannerBg;
