import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


export class FormModal extends Component {
    render() {
        return (
            <div>
                <Modal
      show={this.props.showModalForm}
      onHide={this.props.handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Book Form
        </Modal.Title>
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

  <Form.Group >
    <Form.Label>Book name</Form.Label>
    <Form.Control type="text" placeholder="Book name" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Book description</Form.Label>
    <Form.Control type="text" placeholder="Book description" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
            </div>
        )
    }
}

export default FormModal
