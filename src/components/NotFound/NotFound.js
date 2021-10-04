import { faUnlink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './NotFound.css';

const NotFound = () => {
    const brokenLink = <FontAwesomeIcon icon={faUnlink} />;

    return (
        <div className="container my-5 text-center error">
            <p className="fs-1">{brokenLink}</p>
            <h1 className="text-danger fw-bold">Error 404</h1>
            <p className="text-secondary">The page you are looking is not found</p>
        </div>
    );
};

export default NotFound;