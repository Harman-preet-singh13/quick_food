import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import "./style.css"
import Order from './Order';




export default function Pizza(props) {

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
                    Pizza Menu
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
                            <td>Margherita</td>
                            <td>220</td>
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
                            <td>Peppy Paneer</td>
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
                            <td>Mexican Green Wave</td>
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
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}