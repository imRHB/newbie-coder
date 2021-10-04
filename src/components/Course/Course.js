import React from 'react';
import { useHistory } from 'react-router';

const Course = (props) => {
    const { id, title, img, fee } = props.course;
    const history = useHistory();

    const handleCourseDetails = () => {
        history.push(`/courses/${id.toLowerCase()}`);
    }

    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Only at <strong>${fee}</strong></p>
                </div>
                <button onClick={handleCourseDetails} className="btn btn-outline-primary">Details</button>
            </div>
        </div>
    );
};

export default Course;