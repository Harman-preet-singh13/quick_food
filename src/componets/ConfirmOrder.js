import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function ConfirmOrder(props) {
    return (
       <>
            <Modal
                {...props}
                size="md"
                
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="order-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Order
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <p>
                     Your order is preparing and will be delivered by Raman Mobile Number-232323223 
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
