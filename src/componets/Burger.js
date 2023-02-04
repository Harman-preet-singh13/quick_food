import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import "./style.css"
import Order from './Order';

export default function Burger(props) {
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
                    Burger Menu
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Allo Tikki</td>
                            <td>100</td>
                            <td><Button variant="success" size="sm" onClick={() => setModalShow(true)}>
                                Order Now
                            </Button>
                                <Order
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Mac Paneer</td>
                            <td>250</td>
                            <td><Button variant="success" size="sm" onClick={() => setModalShow(true)}>
                                Order Now
                            </Button>
                                <Order
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>King Burger</td>
                            <td>300</td>
                            <td><Button variant="success" size="sm" onClick={() => setModalShow(true)}>
                                Order Now
                            </Button>
                                <Order
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </Table>
                 <p>*10 rupee for extra cheese slice</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}