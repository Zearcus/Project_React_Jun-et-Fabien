import React, { Component } from 'react';
import { Button, Card, Row, Container, Col } from 'react-bootstrap';
import Main_menu from "../Nav/Main_menu";




class Store extends Component {

    render() {
        console.log(this.props.nft);
        return (
            <div>
                <div>
                    <Main_menu />
                </div>
                <div>
                    {this.props.nft.data && this.props.nft.data.map((nft) => (
                        <div>
                            <Container>
                                <Row className="showcase">
                                <Col md={{ span: 6, offset: 3 }}>
                                <Card style={{ width: '18rem' }} className="cardcontent">
                                <Card.Img variant="top" src={nft.attributes.picture.data && `http://localhost:1337${nft.attributes.picture.data.url}`}/>
                                <Card.Body>
                                    <Card.Title>{nft.attributes.name}</Card.Title>
                                    <Card.Text>
                                        {nft.attributes.description}
                                    </Card.Text>
                                  <Button variant="dark">Purchase</Button> 
           
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
}

export default Store;