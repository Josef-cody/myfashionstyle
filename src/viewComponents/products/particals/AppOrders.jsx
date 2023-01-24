import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function AppOrdersModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='MemberInfo' onClick={handleShow}>
                <i className="fa-regular fa-circle-question ps-2"></i>
            </button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton className='bg-light'>
                    <Modal.Title className='text-center m-auto fs-5'>Download our app for a special deal <br></br>(includes Sale items!)</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-center CTA-module-text'>Offer valid through 01/11/2023 on all app orders. Find your code in the app to redeem the 15% discount. Discount combinable with sale and already reduced items. Cannot be combined with guest designer collaborations or select special collections. Cannot be used for Gift Card purchase or shipping. No adjustments on prior purchases. May not be redeemed for cash or cash equivalent and is not transferable. For Loyalty Members only: offer combinable with one Membership offer or reward. Offer subject to change or expire without notice.</p>
                    <div className="d-grid gap-2">
                        <ButtonGroup vertical>
                            <Button variant="outline-secondary" size="lg" className='CTA-button '><span className='CTA-module-text'>Dowload iOS App</span></Button>
                            <Button variant="outline-secondary" size="lg" className='CTA-button '><span className='CTA-module-text'>Download Android</span></Button>
                        </ButtonGroup>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );

}

export default AppOrdersModal;