import React, { Component } from 'react';
import { Navbar, Container, Row,Nav,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "../style/Nav.css";

class Nav_Bar extends Component {
  render() {
    return (
      <Navbar bg="white" className='containerbox'>
        <Container>
          <Row>
            <Col>
              <Navbar.Brand href="#home">
                {/* <img
                  src={}
                  width="100"
                  height="100"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                /> */}
              </Navbar.Brand>
            </Col>
            <Col className='navlink'>
            <Nav className='navlink'>
              <Link to="/" className="menu_link">Home</Link>
              <Link to="/store" className="menu_link">Store</Link>
              <Link to="/support" className="menu_link">Contact</Link>
            </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  }
}

export default Nav_Bar;

