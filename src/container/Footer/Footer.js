import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footer__section">
                <Container>
                    <Row>
                        <Col md={4} xs={12}>
                            <div className="text-uppercase fw-bold mb-3 fs-3">
                                NFters
                            </div>
                            <p>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                            <div className="social__icons">
                                <FaFacebookSquare className='me-3 fs-3'/>
                                <FaTwitterSquare className='me-3 fs-3'/>
                                <FaLinkedin className='me-3 fs-3'/>
                            </div>
                        </Col>
                        <Col md={2} xs={12}>
                            <h4>Market Place</h4>
                            <ul className='link-items'>
                                <li><a href="#">All NFTS</a></li>
                                <li><a href="#">New</a></li>
                                <li><a href="#">Art</a></li>
                                <li><a href="#">Sports</a></li>
                                <li><a href="#">Utility</a></li>
                                <li><a href="#">Music</a></li>
                                <li><a href="#">Domain Name</a></li>
                            </ul>
                        </Col>
                        <Col md={2} xs={12}>
                            <h4>My Account</h4>
                            <ul className='link-items'>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Favorite</a></li>
                                <li><a href="#">My Collections</a></li>
                                <li><a href="#">Settings</a></li>
                            </ul>    
                        </Col>
                        <Col md={4} xs={12}>
                            <h4>Stay In The Loop</h4>
                            <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
                            <input className='search' type="text" placeholder='Enter your email address..' />
                            <Button className='search-btn'>Subscribe Now</Button>
                        </Col>

                        <div className="footer__bottom">
                            <span>Copyright &copy; 2022 | Mohi Sikder </span>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Footer;