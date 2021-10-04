import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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
            <div className="row row-cols-1 row-cols-md-4 g-5">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;