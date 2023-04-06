import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png';

const FirstHeader = () => {
    return (
        <div>
            <Navbar collapseOnSelect bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img style={{ width: '140px' }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link href="#memes">Login</Nav.Link>
                            <Button variant="danger" className="rounded-pill px-5">
                                Sign up
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default FirstHeader;
