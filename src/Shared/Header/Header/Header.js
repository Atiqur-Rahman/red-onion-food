import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../../Loading/Loading';

const Header = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>;
    }
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
                            <Nav.Link className="d-flex align-items-center" as={Link} to="/cart">
                                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                            </Nav.Link>

                            {user ? (
                                <div className="ps-4 fs-5" style={{ color: 'red' }}>
                                    {!user.displayName ? 'no_name' : user?.displayName}
                                </div>
                            ) : (
                                <Nav.Link className="px-4 ms-4" as={Link} to="/login">
                                    Login
                                </Nav.Link>
                            )}
                            {user ? (
                                <button onClick={() => signOut(auth)} className="border border-0 rounded-pill px-4 ms-2 text-white" style={{ backgroundColor: 'red' }}>
                                    Sign Out
                                </button>
                            ) : (
                                <Nav.Link as={Link} to="/signup" variant="danger" className="rounded-pill px-4 ms-4 text-white" style={{ backgroundColor: 'red' }}>
                                    Sign up
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
