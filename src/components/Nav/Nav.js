import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="bg-dark">
            <div className="container d-sm-flex fs-5 justify-content-between">
                <NavLink className="nav-link title" to="/"><code>NewbieCoder</code></NavLink>
                <div className="d-sm-flex">
                    <NavLink className="nav-link text-light" to="/home">Home</NavLink>
                    <NavLink className="nav-link text-light" to="/courses">Courses</NavLink>
                    <NavLink className="nav-link text-light" to="/instructors">Instructors</NavLink>
                    <NavLink className="nav-link text-light" to="/about">About</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Nav;