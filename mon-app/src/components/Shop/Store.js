import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Button, Card, Row, Container, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import Main_menu from "../Nav/Main_menu";



function Store(props) {


        console.log(props.cart);
        return (
            <div>
                <div>
                    <Main_menu />
                </div>
                <div className="filter">
                    <form>
                        <label>
                            <input placeholder="Search" type="text" name="name" />
                        </label>

                        <input type="submit" value="SEARCH" />

                    </form>
                    
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href="#/action-1"></Dropdown.Item>

                    </DropdownButton>
                </div>
                <div >
                    {props.nft.data && props.nft.data.map((nft, i) => (
                        <div key={i}>
                            <Container>
                                <Row className="showcase">
                                    <Col md={{ span: 6, offset: 3 }}>
                                        <Card style={{ width: '18rem' }} className="cardcontent">
                                            <Card.Img variant="top" src={nft.attributes.picture.data && `http://localhost:1337${nft.attributes.picture.data[0].attributes.url}`} />
                                            <Card.Body>
                                                <Card.Title>{nft.attributes.name}</Card.Title>
                                                <Card.Text>
                                                    {nft.attributes.description}
                                                </Card.Text>
                                                <Card.Text>
                                                    {nft.attributes.price}$
                                                </Card.Text>

                                                <Button variant="dark"
                                                    value={nft.attributes.price}
                                                    onClick={()=> props.addToCart(nft)}
                                                >

                                                    Purchase</Button>



                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>

                        </div>
                    ))}
                </div>
            </div>


        );
}


export default Store;