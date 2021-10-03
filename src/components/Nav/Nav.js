import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="bg-dark d-flex fs-4">
            <NavLink className="nav-link text-light" to="/home">Home</NavLink>
            <NavLink className="nav-link text-light" to="/services">Services</NavLink>
            <NavLink className="nav-link text-light" to="/instructors">Instructors</NavLink>
            <NavLink className="nav-link text-light" to="/about">About</NavLink>
        </nav>
    );
};

export default Nav;