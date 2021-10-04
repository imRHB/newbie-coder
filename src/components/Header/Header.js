import { faBed, faCode, faRedoAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Header = () => {
    const eat = <FontAwesomeIcon icon={faUtensils} />;
    const sleep = <FontAwesomeIcon icon={faBed} />;
    const code = <FontAwesomeIcon icon={faCode} />;
    const repeat = <FontAwesomeIcon icon={faRedoAlt} />;

    return (
        <header className="bg-light">
            <div className="container py-5 text-center">
                <h1 className="mb-4"><code>NEWBIE CODER | <small>Learn with Fun</small></code></h1>
                <p className="m-0">Hey future programmer, want to learn new something with fun?</p>
                <p className="m-0">We provided top class web developer as your instructor, who has a lot of experiences.</p>
                <p>So, why are you waiting for! Just check all of our current ongoing courses and enroll which more suit with you.</p>

                <Row xs={1} sm={2} md={4} className="mt-5 mx-auto fs-4" style={{ maxWidth: '560px' }}>
                    <Col>
                        <p className="m-0">{eat}</p>
                        <p><code><span className="text-warning">eat()</span>;</code></p>
                    </Col>
                    <Col>
                        <p className="m-0">{sleep}</p>
                        <p><code><span className="text-danger">sleep()</span>;</code></p>
                    </Col>
                    <Col>
                        <p className="m-0">{code}</p>
                        <p><code><span className="text-primary">code()</span>;</code></p>
                    </Col>
                    <Col>
                        <p className="m-0">{repeat}</p>
                        <p><code><span className="text-info">repeat()</span>;</code></p>
                    </Col>
                </Row>
            </div>
        </header>
    );
};

export default Header;