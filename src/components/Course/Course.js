import React from 'react';

const Course = (props) => {
    const { title, img, fee } = props.course;

    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Only at ${fee}</p>
                </div>
            </div>
        </div>
    );
};

export default Course;