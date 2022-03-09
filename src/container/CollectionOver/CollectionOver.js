import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './CollectionOver.css';

import { images } from '../../constants'

import { FaEthereum } from "react-icons/fa";

const CollectionOver = () => {
    return (
        <>
            <div className="over__section">
                <Container>
                    <Row>
                        <div className='col-md-4'>
                            <div className="collection">
                                <div className="big__image">
                                    <img src={images.image1} alt="" />
                                </div>
                                <div className="content mt-3 d-flex justify-content-between">
                                    <div className="profile-img d-flex">
                                        <img className='me-3 rounded-circle' src={images.mohi} alt="" />
                                        <div>
                                        <h6>The Futr Abstr</h6>
                                        <span>10 in the Stock</span>
                                        </div>
                                    </div>
                                    <div className="current-bid ">
                                            <span>Highest Bid</span>
                                        <div className="up-down mt-1">
                                            <h5><FaEthereum/> 0.25ETH</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className="row">
                                <div className='mb-3 d-flex'>
                                    <div className="col-md-5 me-2">
                                        <div className="items__image">
                                            <img src={images.image2} alt="" />
                                        </div>    
                                    </div>
                                    <div className="col-md-7">
                                        <div className="content">
                                            <h6>The Futr Abstr</h6>
                                            <div className="profile-img d-flex align-items-center">
                                                <img className='me-2 rounded-circle' src={images.mohi} alt="" />
                                                <div className="text-color mt-1">
                                                    <h6 className='icon-border'><FaEthereum/> 0.25ETH</h6>
                                                </div>
                                                <span className='ms-2'>1 to 8</span>
                                            </div>
                                            <Button className="collection__btn mt-3">Place a bid</Button>
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-3 d-flex'>
                                    <div className="col-md-5 me-2">
                                        <div className="items__image">
                                            <img src={images.image3} alt="" />
                                        </div>    
                                    </div>
                                    
                                    <div className="col-md-7">
                                        <div className="content">
                                            <h6>The Futr Abstr</h6>
                                            <div className="profile-img d-flex align-items-center">
                                                <img className='me-2 rounded-circle' src={images.mohi} alt="" />
                                                <div className="text-color mt-1">
                                                    <h6 className='icon-border'><FaEthereum/> 0.25ETH</h6>
                                                </div>
                                                <span className='ms-2'>1 to 8</span>
                                            </div>
                                            <Button className="collection__btn mt-3">Place a bid</Button>
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-3 d-flex'>
                                    <div className="col-md-5 me-2">
                                        <div className="items__image">
                                            <img src={images.image4} alt="" />
                                        </div>    
                                    </div>
                                    <div className="col-md-7">
                                        <div className="content">
                                            <h6>The Futr Abstr</h6>
                                            <div className="profile-img d-flex align-items-center">
                                                <img className='me-2 rounded-circle' src={images.mohi} alt="" />
                                                <div className="text-color mt-1">
                                                    <h6 className='icon-border'><FaEthereum/> 0.25ETH</h6>
                                                </div>
                                                <span className='ms-2'>1 to 8</span>
                                            </div>
                                            <Button className="collection__btn mt-3">Place a bid</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3 border-left'>
                            <h4>Top Collections over</h4>
                            <p>Last 7 days</p>
                            <div className='content'>
                                <div className="profile-img-right d-flex align-items-center">
                                    <h5 className='me-2'>1</h5>
                                    <img className='me-3 rounded-circle' src={images.mohi} alt="" />
                                    <div className="mt-1">
                                        <h6>CryptoFunks</h6>
                                        <p><FaEthereum className='fs-4'/> 19,769.65</p>
                                    </div>
                                    <span className='ms-4'>+26.68%</span>
                                </div>
                                <hr />
                            </div>
                            <div className='content'>
                                <div className="profile-img-right d-flex align-items-center">
                                    <h5 className='me-2'>2</h5>
                                    <img className='me-3 rounded-circle' src={images.mohi} alt="" />
                                    <div className="mt-1">
                                        <h6>CryptoFunks</h6>
                                        <p><FaEthereum className='fs-4'/> 19,769.65</p>
                                    </div>
                                    <span className='ms-4'>+26.68%</span>
                                </div>
                                <hr />
                            </div>
                            <div className='content'>
                                <div className="profile-img-right d-flex align-items-center">
                                    <h5 className='me-2'>3</h5>
                                    <img className='me-3 rounded-circle' src={images.mohi} alt="" />
                                    <div className="mt-1">
                                        <h6>CryptoFunks</h6>
                                        <p><FaEthereum className='fs-4'/> 19,769.65</p>
                                    </div>
                                    <span className='ms-4'>+26.68%</span>
                                </div>
                                <hr />
                            </div>
                            <div className='content'>
                                <div className="profile-img-right d-flex align-items-center">
                                    <h5 className='me-2'>4</h5>
                                    <img className='me-3 rounded-circle' src={images.mohi} alt="" />
                                    <div className="mt-1">
                                        <h6>CryptoFunks</h6>
                                        <p><FaEthereum className='fs-4'/> 19,769.65</p>
                                    </div>
                                    <span className='ms-4'>+26.68%</span>
                                </div>
                                <hr />
                            </div>
                            <div className='content'>
                                <div className="profile-img-right d-flex align-items-center">
                                    <h5 className='me-2'>5</h5>
                                    <img className='me-3 rounded-circle' src={images.mohi} alt="" />
                                    <div className="mt-1">
                                        <h6>CryptoFunks</h6>
                                        <p><FaEthereum className='fs-4'/> 19,769.65</p>
                                    </div>
                                    <span className='ms-4'>+26.68%</span>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default CollectionOver;