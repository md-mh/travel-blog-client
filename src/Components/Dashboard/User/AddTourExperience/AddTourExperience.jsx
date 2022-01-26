import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';


// Add Customer Review Components
const AddTourExperience = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://nameless-lowlands-07279.herokuapp.com/tour/', data)
        alert('Add Tour Successfully');
        reset();
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={10}>
                    <h2 className="text-center">Add Your Tour Exprience</h2>
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group className="mb-3 d-none" controlId="formBasicPassword">
                            <Form.Label>Traveler Name</Form.Label>
                            <Form.Control type="text" {...register("name")} value={user.displayName} />
                        </Form.Group>
                        <Form.Group className="mb-3 d-none" controlId="formBasicPassword">
                            <Form.Label>Traveler Email</Form.Label>
                            <Form.Control type="text" {...register("email")} value={user.email} />
                        </Form.Group>
                        <Form.Group className="mb-3 d-none" controlId="formBasicPassword">
                            <Form.Label>Traveler status</Form.Label>
                            <Form.Control type="text" {...register("status")} value='Pending' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Travel Title</Form.Label>
                            <Form.Control type="text" {...register("title")} placeholder="Write Your title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Cover image url</Form.Label>
                            <Form.Control type="url"  {...register("img")} placeholder="Give the cover image url" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Your Tour Experience</Form.Label>
                            <Form.Control as="textarea" {...register("details")} placeholder="Write Your Tour Experience" style={{ height: '150px' }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Types of Category</Form.Label>
                            <Form.Control type="text" {...register("category")} placeholder="Write the travel's Category" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Cost of the travel</Form.Label>
                            <Form.Control type="number" {...register("cost")} placeholder="Write cost of the travel" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" {...register("location")} placeholder="Write the place location" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddTourExperience;