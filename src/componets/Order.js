import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ConfirmOrder from './ConfirmOrder';


export default function Order(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Coustomer Address
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder="Mobile Number" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control type="text" placeholder="Pin Code" required />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={() => setModalShow(true)}>
                        Submit
                    </Button>

                    <ConfirmOrder
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button  onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );

}
