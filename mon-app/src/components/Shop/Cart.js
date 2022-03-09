import React from 'react'
import { Navbar, Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import dodge_coin from '../../pictures/dodge_coin.png'
import CustomForm from '../Shop/CustomForm'
import "./store.css"

function Cart() {
    return (
        <div>
            <Navbar className="navbar" collapseOnSelect expand="lg" bg="white" variant="dark">
                <Container style={{ justifyContent: 'center' }}>
                    <Navbar.Brand>
                    <Link to="/">
                    <img
                            src={dodge_coin}
                            width="100"
                            height="100"

                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                    <Row style={{marginTop:'30px'}}>
                        <Col xs={12} md={8} className="cci">
                            <h1>Customer Information</h1>
                            <CustomForm />
                            
                        </Col>
                        <Col xs={6} md={4} className="cco">
                            <h1>Checkout</h1>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Cart