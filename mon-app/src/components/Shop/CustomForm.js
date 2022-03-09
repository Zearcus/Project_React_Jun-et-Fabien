import {React, useState} from 'react'
import { Form, Col, Row, InputGroup, Button } from 'react-bootstrap'

function CustomForm() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>  
          <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>         
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Adresse</Form.Label>
            <Form.Control type="text" placeholder="Adresse" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid adresse.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control type="text" placeholder="Postal Code" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Postal Code.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="City"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>         
        </Row>
        
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    );
}

export default CustomForm;
  
