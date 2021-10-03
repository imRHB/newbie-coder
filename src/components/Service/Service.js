import React from 'react';

const Service = (props) => {
    const { title, img } = props.course;
    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{ }</p>
                </div>
            </div>
        </div>
    );
};

export default Service;