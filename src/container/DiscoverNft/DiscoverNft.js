import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './DiscoverNft.css';

import { BsFilter } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";

import { images } from '../../constants';


const DiscoverNft = () => {
    return (
        <>
            <div className="discover__section">
                <Container>
                    <div className="section__title">
                        <h2>discover more nfts</h2>
                    </div>
                    <div className='d-flex justify-content-between my-4'>
                        <div className="filter__menu d-flex">
                            <div className='btn btn-light me-4'>All Categories</div>
                            <div className='btn btn-light me-4'>Art</div>
                            <div className='btn btn-light me-4'>Celebrities</div>
                            <div className='btn btn-light me-4'>Gaming</div>
                            <div className='btn btn-light me-4'>Sport</div>
                            <div className='btn btn-light me-4'>Music</div>
                            <div className='btn btn-light me-4'>Crypto</div>
                        </div>
                        <div className="filter__btn">
                            <div className='btn btn-light'> <BsFilter className='fs-3 me-3'/>All Filters</div>
                        </div>
                    </div>
                    <div className="single__items">
                        <Row xs={12} md={4} className="g-4">
                            {Array.from({ length: 16 }).map((_, idx) => (
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" className='card__img' src={images.hero1} />
                                        <div className="profile card__profile">
                                            <img src={images.mohi} alt="" />
                                            <img src={images.mohi} alt="" />
                                            <img src={images.mohi} alt="" />
                                            <img src={images.mohi} alt="" />
                                        </div>
                                        <Card.Body>
                                        <Card.Title>ArtCrypto</Card.Title>
                                        <Card.Text>
                                            <div className='card__info d-flex justify-content-between'>
                                                <p className=''><FaEthereum /> 0.25ETH</p>
                                                <span className='ms-4'>1 to 321</span>
                                            </div>
                                        </Card.Text>
                                            <hr />
                                            <Card.Text className='d-flex justify-content-between align-items-center'>
                                                <div className="btn btn-light card__btn">3h 50m 2s left</div>
                                                <span className='card__text'>Place a bid</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <button className="more__btn btn btn-light">More NFTs</button>
                </Container>    
            </div>
        </>
    );
};

export default DiscoverNft;