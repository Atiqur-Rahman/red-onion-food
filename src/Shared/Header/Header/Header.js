import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect bg="white" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img style={{ width: '140px' }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="d-flex align-items-center" href="/cart">
                                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                            </Nav.Link>
                            <Nav.Link className="ms-4" href="/login">
                                Login
                            </Nav.Link>
                            <Button variant="danger" className="rounded-pill px-4 ms-4" style={{ backgroundColor: 'red' }}>
                                Sign up
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
