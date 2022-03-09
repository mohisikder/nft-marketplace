import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './SignUp.css';

import { images } from '../../constants';

const SignUp = () => {
    return (
        <>
            <div className="signup__section">
                <Container>
                    <Row className='d-flex align-items-center'>
                        <Col xs={12} md={7}>
                            <div className="signup__content d-flex justify-content-between align-items-center">
                                <div className="signup__images">
                                    <img src={images.hero3} alt="" />
                                    <div className="profile signup__profile">
                                        <img className='profile__image' src={images.mohi} alt="" />
                                    </div>
                                </div>
                                <div className="signup__images__middle">
                                    <img src={images.hero2} alt="" />
                                    <div className="profile signup__profile__middle">
                                        <img className='profile__image' src={images.mohi} alt="" />
                                    </div>
                                </div>  
                            </div>

                            <div className="signup__images__last">
                                    <img src={images.hero1} alt="" />
                                    <div className="profile signup__profile__last">
                                        <img className='profile__image' src={images.mohi} alt="" />
                                    </div>
                                </div> 
                        </Col>
                        <Col xs={12} md={5}>
                            <div className="signup__info">
                                <h3>Create and <br /> sell your NFTs</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                                <Button className='hero__btn'>Sign Up Now</Button>
                            </div> 
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default SignUp;