import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AmazeNft.css';


import { FaChartBar, FaRegCreditCard } from "react-icons/fa";


const AmazeNft = () => {
    return (
        <>
            <div className="amazin__section d-flex align-items-center">
                <Container>
                    <Row>
                        <Col md={4} xs={12}>
                            <div className="amaze-title">
                                <h2>The amazing NFT art of the world here</h2>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="amaze d-flex">
                                <FaRegCreditCard className='me-2 fs-2'/>
                                <div className="info">
                                    <h5>Fast Transaction</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="amaze d-flex">
                                <FaChartBar className='me-2 fs-2'/>
                                <div className="info">
                                    <h5>Growth Transaction</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default AmazeNft;