import React from 'react'
import { Navbar, Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import dodge_coin from '../../pictures/dodge_coin.png'
import CustomForm from '../Shop/CustomForm'
import "./store.css"


function Cart(props) {
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
                <Row style={{ marginTop: '30px' }}>
                    <Col xs={12} md={8} className="cci">
                        <h1>Customer Information</h1>
                        <CustomForm />

                    </Col>
                    <Col xs={6} md={4} className="cco">
                        <h1>Checkout</h1>

                        {props.cart && props.cart.map((cart, i) => (
                            <div key={i} className="panel" >
                                <img style={{ width: '20%', padding: '10px' }}
                                    src={cart.attributes.picture.data && `http://localhost:1337${cart.attributes.picture.data[0].attributes.url}`}>
                                </img>
                                
                                <div><p>{cart.attributes.name}</p></div>
                                <div><p>{cart.attributes.price}$</p></div>
                                <button variant="dark"
                                    onClick={()=> props.removeArticle(cart)}
                                >Remove</button>
                            </div>
                        ))}
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cart