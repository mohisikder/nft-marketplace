import React from 'react';
import './Hero.css';

import { images} from '../../constants'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEthereum } from "react-icons/fa";

const Hero = () => {
    return (
        <>
            <div className="hero__section">
                <Container>
                    <Row>
                        <Col md={6} xs={12}>
                            <div className="hero__info text-left">
                                <h1 className='hero-title'>Discover, and collect Digital Art  NFTs </h1>
                                <p>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                                <Button className='hero__btn'>Explore Now</Button>
                                <div className="sub-counting d-flex">
                                    <div className="artwork me-3">
                                        <h1>98K+</h1>
                                        <span>Artwork</span>
                                    </div>
                                    <div className="auction me-3">
                                        <h1>12K+</h1>
                                        <span>Auction</span>
                                    </div>
                                    <div className="artist">
                                        <h1>15K+</h1>
                                        <span>Artits</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} xs={12}>
                            <div className="hero__image">
                                <div className="front-img">
                                    <img className='fluid' src={images.hero1} alt="" />
                                    <div className="img-content">
                                        <h6>Abstr Gradient NFT</h6>
                                        <div className="img-profile">
                                            <img src={images.mohi} alt="" />
                                            <span>Mohiuddin20</span>
                                        </div>
                                    </div>
                                    <div className="img-footer d-flex justify-content-around align-items-center">
                                        <div className="current-bid ">
                                            <span>Current Bid</span>
                                            <div className="up-down mt-1">
                                                <h5><FaEthereum/> 0.25ETH</h5>
                                            </div>
                                        </div>
                                        <div className="current-bid">
                                            <span>Ends in</span>
                                            <div className="up-down mt-1">
                                                <h5>12h 43m 43s</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>    
            </div>   
        </>
    );
};

export default Hero;