import React from 'react';

const Instructor = (props) => {
    const { name, img, position, company } = props.instructor;
    return (
        <div>
            <div class="card mb-3" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                    <div class="col-12 col-md-6">
                        <img src={img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="card-body">
                            <h5 class="card-title text-success">{name}</h5>
                            <p class="card-text">{position} at <strong>{company}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;