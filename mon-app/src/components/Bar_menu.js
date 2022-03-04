import React, { Component } from 'react';
import { Container, Nav, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../style/Bar_menu.css';

class Bar_menu extends Component {

    render() {
        return (
        
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/">Home</Link>
                            <Link to="/store">Store</Link>
                            <Link to="/support">
                                Support
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
        );
    }
}

export default Bar_menu;