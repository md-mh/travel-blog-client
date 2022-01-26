import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// Manage tour page Components 
const Managetour = () => {

    const [tours, setTours] = useState([]);
    const [oneTour, setOneTour] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/tour')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])

    // Delete an tour 
    const handleDelete = id => {
        const confirm = window.confirm("Are you wants to delete ?");
        if (confirm) {
            fetch(`http://localhost:5000/tour/${id}`, {
                method: "DELETE"
            })
            const remaining = tours.filter(data => data._id !== id);
            setTours(remaining);
        }
    }



    // Update status 
    const handleUpdateStatus = id => {
        const url = `http://localhost:5000/tour/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setOneTour(data));
        console.log(oneTour.status);
        if (oneTour.status === "Pending") {
            oneTour.status = "Published";
            const updatetour = { name: oneTour.name, email: oneTour.email, status: oneTour.status, title: oneTour.title, img: oneTour.img, cost: oneTour.cost, details: oneTour.details, category: oneTour.category, location: oneTour.location };
            setOneTour(updatetour);
            setTours(updatetour);
            console.log(oneTour.status);

            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(oneTour)
            })
            alert('Status Update Successful');
            const update = tours;
            setTours(update);

        }

    }
    return (
        <Container>
            <Row className="justify-content-center my-3">
                <h2 className="text-center">Manage tour</h2>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>Tour Title</th>
                                <th>Location</th>
                                <th>Category</th>
                                <th>View</th>
                                <th>Status</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        {
                            tours.map(tour => <tbody key={tour._id} tour={tour}>
                                <tr>
                                    <td>{tour.title}</td>
                                    <td>{tour.location}</td>
                                    <td>{tour.category}</td>
                                    <td> <Link to={`/tourDetails/${tour._id}`}> <Button variant="info"> View </Button> </Link>
                                    </td>
                                    <td> <Button title="Clicked Panding to Shipped" className="btn-warning" onClick={() => handleUpdateStatus(tour._id)}>{tour.status}</Button> </td>
                                    <td><Button className="btn-danger" onClick={() => handleDelete(tour._id)}>Delete</Button></td>
                                </tr>
                            </tbody>)
                        }
                    </Table>

                </Col>
            </Row>
        </Container>
    );
};

export default Managetour;