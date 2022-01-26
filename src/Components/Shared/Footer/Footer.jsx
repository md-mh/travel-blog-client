import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, } from 'react-icons/fi';
import { SiMastercard, SiPayoneer, SiPaypal, SiVisa } from 'react-icons/si';
import './Footer.css'

//Foter Components
const Footer = () => {
    return (
        <footer className="py-4 mt-5">
            <Container>
                {/* Footer area  */}
                <Row className="text-center">
                    <Col md={{ span: 4, offset: 1 }}>
                        <h4>ABOUT US</h4> <br />
                        <p className="text-center fw-bold">This is a Tour blog site. you can share you exprience with us</p>
                    </Col>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h4>CONNECT US</h4> <br />
                        <FiLinkedin /><FiFacebook /><FiInstagram /><FiTwitter />
                    </Col>
                </Row>
                <hr />
                <Row className="text-center">
                    <span>Copyright © All rights reserved.</span>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;