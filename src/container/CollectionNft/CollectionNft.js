import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './CollectionNft.css';

import { images } from '../../constants';

const CollectionNft = () => {
    return (
        <>
            <div className="nft__section">
                <Container>
                    <div className="feature__title">
                        <h2>Collection Featured NFTs</h2>
                    </div>
                    <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 3}).map((_, idx) => (
                            <Col>
                                <div className="feature__content">
                                    <div className="feature__image d-flex">
                                        <div className="feature__big__img me-3">
                                            <img src={images.image5} alt="" />
                                        </div>
                                        <div className="feature__single__image">
                                            <img src={images.image1} alt="" />
                                            <img src={images.image6} alt="" />
                                            <img src={images.image7} alt="" />
                                        </div>
                                    </div>
                                    <div className="feature__info mt-4">
                                        <h6>Amazin Collection</h6>
                                        <div className='d-flex justify-content-between'>
                                            <div className="profile d-flex align-items-center">
                                                <img src={images.mohi} alt="" />
                                                <p className='ms-3'>by Mohiuddin</p>
                                            </div>
                                            <Button className='btn__border'>Total 54 items</Button>
                                        </div>
                                    </div>   
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>    
            </div>
        </>
    );
};

export default CollectionNft;