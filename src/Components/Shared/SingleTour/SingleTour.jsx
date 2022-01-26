import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleTour.css'

// Single Product item components

const SingleTour = (props) => {
    // take data using props 
    const { _id, title, img, location, details } = props.post;

    return (
        <Col>
            {/* single service card */}
            <Card className="card">
                <Card.Img variant="top" src={img} className="card-img" />
                <Card.Body>
                    <h3 className="text-primary">{title}</h3>
                    <p><span className="fw-bold">Details:</span> {details.slice(0, 200)}...</p>
                </Card.Body>
                <Card.Footer style={{ "backgroundColor": "white" }} className="d-flex justify-content-between align-items-center">
                    <p className='text-success '><span className="fw-bold">Location:</span> {location}</p>
                    <Link to={`/tourDetails/${_id}`}> <Button variant="info"> Read Details </Button> </Link>
                </Card.Footer>
            </Card>
        </Col >
    );
};

export default SingleTour;
