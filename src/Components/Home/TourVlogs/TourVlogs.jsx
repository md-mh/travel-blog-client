import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleTour from '../../Shared/SingleTour/SingleTour';

// Home page Product component  

const TourVlogs = () => {

    const [tours, setTours] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tour/')
            .then(res => res.json())
            .then(data => setTours(data));
    }, []);

    useEffect(() => {
        const showTours = tours.filter(tour => tour.status == "Published");
        setServices(showTours.slice(0, 10))
    }, [tours])
    console.log(services.length);
    return (
        <Container className="my-5 py-3">
            <h1 className="text-center py-3">See <span className="text-primary">Tours</span> Vlog</h1>
            {/* Bootstrap responsive row */}
            <Row xs={1} md={2} lg={2} className="g-4 py-4">
                {
                    // mappimg data from services 
                    services.map(service => <SingleTour key={service._id} service={service}></SingleTour>)
                }
            </Row>
        </Container>
    );
};

export default TourVlogs;