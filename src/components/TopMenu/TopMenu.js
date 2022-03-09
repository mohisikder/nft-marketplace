import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './TopMenu.css';

import { FaSearch } from "react-icons/fa";

const TopMenu = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#" className='logo'>NFTERS <span className='border-right'></span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Marketplace</Nav.Link>
                        <Nav.Link href="#action2">Resource</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                    </Nav>
                    <Form className="d-flex search">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        />
                        <div className='search-btn'><FaSearch /></div>
                    </Form>
                    <div className='button__info'>
                        <Button className='mx-4 rounded-pill px-4 btn__up'>Upload</Button>
                        <Button className='mx-2 rounded-pill px-4 btn_outline'>Conect Wallet</Button>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default TopMenu;