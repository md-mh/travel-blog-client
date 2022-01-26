import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';



// My tour page Components 
const Mytour = () => {
    const { user } = useAuth();
    const [tours, settours] = useState([]);
    const [mytour, setMytour] = useState([]);
    useEffect(() => {
        fetch('https://nameless-lowlands-07279.herokuapp.com/tour')
            .then(res => res.json())
            .then(data => settours(data))
    }, [])

    useEffect(
        () => {
            const foundtour = tours.filter(tour => tour.email === user.email)
            setMytour(foundtour);
        }, [tours, user.email])

    // Delete an tour 
    const handleDelete = id => {
        const confirm = window.confirm("Are you wants to delete ?");
        if (confirm) {
            fetch(`https://nameless-lowlands-07279.herokuapp.com/tour/${id}`, {
                method: "DELETE"
            })
            const remaining = tours.filter(data => data._id !== id);
            settours(remaining);
        }
    }
    return (
        <Container>
            <Row className="justify-content-center my-3">
                <h2 className="text-center">My tour</h2>
                <Col md={11}>
                    <Table>
                        <thead>
                            <tr>
                                <th>Tour Title</th>
                                <th>Location</th>
                                <th>View</th>
                                <th>Status</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        {
                            mytour.map(tour => <tbody key={tour._id} tour={tour}>
                                <tr>
                                    <td>{tour.title}</td>
                                    <td>{tour.location}</td>
                                    <td> <Link to={`/tourDetails/${tour._id}`}> <Button variant="info"> View </Button> </Link>
                                    </td>
                                    <td> <Button className="btn-warning">{tour.status}</Button> </td>
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

export default Mytour;