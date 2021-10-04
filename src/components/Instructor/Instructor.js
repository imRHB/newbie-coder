import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Instructor = (props) => {
    const { name, img, position, company } = props.instructor;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>{position} at <strong>{company}</strong></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Instructor;
