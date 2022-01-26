import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';


// Place Order page Components 
const TourDetails = () => {

    const { id } = useParams();
    const [tourDetails, setTourDetails] = useState([]);
    useEffect(
        () => {
            fetch(`http://localhost:5000/tour/${id}`)
                .then(res => res.json())
                .then(data => setTourDetails(data))
        }, [id]);


    return (

        <>
            <Container>
                <Row className="my-5">
                    <Col>
                        <img src={tourDetails.img} alt="Tour Cover" height={'350px'} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default TourDetails;