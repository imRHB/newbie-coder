import { faBed, faCode, faRedoAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';

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
                <div className="d-flex justify-content-center mt-5">
                    <div className="fs-3 mx-3">
                        <p className="m-0">{eat}</p>
                        <p><code>eat();</code></p>
                    </div>
                    <div className="fs-3 mx-3">
                        <p className="m-0">{sleep}</p>
                        <p><code>sleep();</code></p>
                    </div>
                    <div className="fs-3 mx-3">
                        <p className="m-0">{code}</p>
                        <p><code>code();</code></p>
                    </div>
                    <div className="fs-3 mx-3">
                        <p className="m-0">{repeat}</p>
                        <p><code>repeat();</code></p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;