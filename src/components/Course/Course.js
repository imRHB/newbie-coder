import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const { title, img, fee } = props.course;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>Only at <strong>${fee}</strong></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;
