import React from 'react';
import './navBar.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function NavBar() {
    return (
        <div className="navBar">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">NETFLIX</Navbar.Brand> {/* Replace href with to */}

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Replace href with to */}
                            <Nav.Link as={Link} to="/tv-shows">TV Shows</Nav.Link> {/* Replace href with to */}
                            <Nav.Link as={Link} to="/movies">Movies</Nav.Link> {/* Replace href with to */}
                            <Nav.Link as={Link} to="/new-popular">New & Popular</Nav.Link> {/* Replace href with to */}
                            <Nav.Link as={Link} to="/my-list">My List</Nav.Link> {/* Replace href with to */}
                            <Nav.Link as={Link} to="/browse-languages">Browse by Languages</Nav.Link> {/* Replace href with to */}

                            {/* Uncomment and adjust the NavDropdown if needed */}
                            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/action3">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
