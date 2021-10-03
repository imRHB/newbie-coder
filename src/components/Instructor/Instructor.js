import React from 'react';

const Instructor = (props) => {
    const { name, img, position, company } = props.instructor;
    return (
        <div>
            <div className="card h-100 shadow-lg">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title text-secondary">{name}</h5>
                    <p className="card-text">{position} at <strong>{company}</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Instructor;