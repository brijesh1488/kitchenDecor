import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { Button, Modal, Form } from 'react-bootstrap';

function  BtnModal() {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <div >
       <Button to="/"  onClick={handleShow} className="showBookFree_modal btn-primary2">Book Free Online Consultation</Button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="dynamic"
        keyboard={false}
      >
        <Modal.Header closeLabel closeButton >
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" className="btn-primary2" type="submit">
    Submit
  </Button>
</Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
      </div>
    );
  }

  export default BtnModal;