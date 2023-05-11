import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const SecondHeader = () => {
    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto my-4">
                            <Nav.Link href="#breakfast">Breakfast</Nav.Link>
                            <Nav.Link href="#lunch" className="mx-4" variant="dark">
                                Lunch
                            </Nav.Link>
                            <Nav.Link href="#dinner">Dinner</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default SecondHeader;
