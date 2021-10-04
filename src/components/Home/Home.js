import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import Header from '../Header/Header';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/newbie-coder/main/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data.slice(0, 4)));
    }, []);

    return (
        <div className="">
            <Header></Header>
            <div className="container my-5">
                <h3 className="my-4 fw-bold text-info">Top Courses</h3>
                <div className="row row-cols-1 row-cols-md-4 g-5">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;