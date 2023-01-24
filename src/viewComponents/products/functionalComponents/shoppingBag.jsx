import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Cart from './Cart';

function ShoppingBag(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Your shopping bag
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Cart
                    {...props}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button size="sm" variant='warning' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ShoppingBag