import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import TourVlogs from './TourVlogs/TourVlogs';


// home Page 
const Home = () => {

    const { loading } = useAuth();
    if (loading) {
        return (
            <div className="spinner">
                <Spinner animation="grow" variant="primary" />
            </div>
        );
    } else {
        return (
            <>
                <Banner></Banner>
                <TourVlogs></TourVlogs>
                <Contact></Contact>

            </>
        );
    }

};

export default Home;