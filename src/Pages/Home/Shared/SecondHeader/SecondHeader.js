import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SecondHeader = () => {
    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto my-4">
                            <Nav.Link as={Link} to="breakfast">
                                Breakfast
                            </Nav.Link>
                            <Nav.Link as={Link} to="launch" className="mx-4" text="dark">
                                Lunch
                            </Nav.Link>
                            <Nav.Link as={Link} to="dinner">
                                Dinner
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default SecondHeader;
