import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';


// Place Order page Components 
const TourDetails = () => {

    const { id } = useParams();
    const [tourDetails, setTourDetails] = useState([]);
    useEffect(
        () => {
            fetch(`https://nameless-lowlands-07279.herokuapp.com/tour/${id}`)
                .then(res => res.json())
                .then(data => setTourDetails(data))
        }, [id]);


    return (

        <>
            <Container className="my-5">

                <img src={tourDetails.img} alt="Tour Cover" height={'350px'} />
                <h2 className='text-primary my-3'>{tourDetails.title}</h2>

                <Row className="my-3">
                    <Col><h5>Author: {tourDetails.name}</h5></Col>
                    <Col><h5>Location: {tourDetails.location}</h5></Col>
                    <Col><h5>Cost: {tourDetails.cost}</h5></Col>
                    <Col><h5>Category: {tourDetails.category}</h5></Col>
                </Row>
                <p>{tourDetails.details}</p>
            </Container>
        </>
    );
};

export default TourDetails;