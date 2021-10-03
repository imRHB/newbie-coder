import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <header className="bg-light">
            <div className="container py-5 text-center">
                <h1><code>NEWBIE CODER | <small>Learn with Fun</small></code></h1>
                <p className="text-muted">Hey future programmer, want to learn new something?</p>
            </div>
        </header>
    );
};

export default Header;