import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import Header from '../Header/Header';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/imRHB/fake-coder/main/courses.json`)
            .then(res => res.json())
            .then(data => setCourses(data.slice(0, 4)));
    }, []);

    return (
        <div>
            <Header></Header>
            <div className="container my-5">
                <h3 className="my-4 fw-bold text-info">Top Courses</h3>
                <Row xs={1} md={2} lg={3} xl={4} className="text-center g-4">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;