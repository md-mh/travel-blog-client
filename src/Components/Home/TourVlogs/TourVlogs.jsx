import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleTour from '../../Shared/SingleTour/SingleTour';
import Pagination from '../Pagination/Pagination';

// Home page Product component  

const TourVlogs = () => {

    const [tours, setTours] = useState([]);
    const [posts, setPosts] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        fetch('https://nameless-lowlands-07279.herokuapp.com/tour/')
            .then(res => res.json())
            .then(data => setTours(data));
    }, []);

    useEffect(() => {
        const showTours = tours.filter(tour => tour.status == "Published");
        setPosts(showTours)
    }, [tours]);

    //get curret posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexofFirstPost = indexOfLastPost - postsPerPage;
    const currentposts = posts.slice(indexofFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    console.log(posts.length);
    return (
        <Container className="my-5 py-3">
            <h1 className="text-center py-3">See <span className="text-primary">Tours</span> Vlog</h1>
            {/* Bootstrap responsive row */}
            <Row xs={1} md={2} lg={2} className="g-4 py-4">
                {
                    // mappimg data from services 
                    currentposts.map(post => <SingleTour key={post._id} post={post}></SingleTour>)
                }
            </Row>

            {/* Pagination  */}

            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}></Pagination>


        </Container>
    );
};

export default TourVlogs;