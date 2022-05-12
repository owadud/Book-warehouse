import React from 'react';
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to='/home'>Book Warehouse Manager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                            <Nav.Link href="https://stackoverflow.com/questions/72158366/what-is-the-main-reasons-of-using-jwt" target="_blank">StackOverFlow</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="addSupplier">Add Supplier</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
           </Navbar>
        </>
    );
};

export default Header;