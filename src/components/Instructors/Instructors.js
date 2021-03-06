import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/imRHB/fake-coder/main/instructors.json`)
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="my-4 fw-bold text-info">Leading Persons</h2>
            <Row xs={1} md={2} lg={3} className="text-center g-4">
                {
                    instructors.map(instructor => <Instructor
                        key={instructor.id}
                        instructor={instructor}
                    ></Instructor>)
                }
            </Row>
        </div>
    );
};

export default Instructors;