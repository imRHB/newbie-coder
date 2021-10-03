import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container my-5 text-center error">
            <h1 className="text-danger">Error 404</h1>
            <p className="text-secondary">Page not found</p>
        </div>
    );
};

export default NotFound;