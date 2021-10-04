import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/newbie-coder/main/instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, []);
    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5">
                {
                    instructors.map(instructor => <Instructor
                        key={instructor.id}
                        instructor={instructor}
                    ></Instructor>)
                }
            </div>
        </div>
    );
};

export default Instructors;