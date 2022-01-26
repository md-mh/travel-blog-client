import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Switch, useRouteMatch } from 'react-router';
import AdminRoute from '../Route/AdminRoute';
import PrivateRoute from '../Route/PrivateRoute';
import CreateAdmin from './Admin/CreateAdmin/CreateAdmin';
import Managetour from './Admin/Managetour/Managetour';
import Menu from './Menu/Menu';
import AddTourExperience from './User/AddTourExperience/AddTourExperience';
import Mytour from './User/Mytour/Mytour';
import Welcome from './User/Welcome/Welcome';

// After Login Dashboard Page with their Components
const Dashboard = () => {
    let { path } = useRouteMatch();
    return (
        <Container className="my-5">
            <Row>
                <Col lg={3}>
                    <Menu></Menu>
                </Col>
                <Col lg={9}>

                    <Switch>
                        <PrivateRoute exact path={`${path}/`}> <Welcome></Welcome> </PrivateRoute>
                        <PrivateRoute path={`${path}/addTour`}> <AddTourExperience></AddTourExperience> </PrivateRoute>
                        <PrivateRoute path={`${path}/Mytour`}> <Mytour></Mytour> </PrivateRoute>

                        <AdminRoute path={`${path}/Managetour`}> <Managetour></Managetour> </AdminRoute>
                        <AdminRoute path={`${path}/createAdmin`}> <CreateAdmin></CreateAdmin> </AdminRoute>
                    </Switch>

                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;