import React, { Component } from 'react';
import { Navbar, Container, Row, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dodge_coin from '../../pictures/dodge_coin.png'
import cart from '../../pictures/cart.png'
import "./Main_menu.css";

class Main_menu extends Component {
  render() {
    return (
      <Navbar className="navbar"collapseOnSelect expand="lg" bg="white" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
                src={dodge_coin}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/support">Contact</Link>         
            </Nav>
              <Button variant="outlinelight">
               <Link to="/Cart">
              <img
                            src={cart}
                            width="30"
                            height="30"

                            className="d-inline-block align-top"
                            alt="cart"
                        />
              </Link> 
              </Button>
            <Nav>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }


}

export default Main_menu;
