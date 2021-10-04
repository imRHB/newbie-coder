import React from 'react';
import { NavLink } from 'react-bootstrap';
import Nav from '../Nav/Nav';

const Navbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Nav className="me-auto">
                <NavLink to="/home">Home</NavLink>
                {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
        </Navbar>
    );
};

export default Navbar;