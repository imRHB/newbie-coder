import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/newbie-coder/main/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="my-4 fw-bold text-info">Ongoing Courses</h2>
            <Row xs={1} md={2} lg={3} xl={4} className="text-center g-4">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </Row>
        </div>
    );
};

export default Courses;
