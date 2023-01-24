import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function MembershipModal() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='MemberInfo' onClick={handleShow}>
      <i className="fa-regular fa-circle-question ps-2"></i>
      </button>

      <Modal show={show} onHide={handleClose}  centered>
        <Modal.Header closeButton  className='bg-light'>
          <Modal.Title className='ms-auto fs-4'>Don't miss out!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="d-grid gap-2">
        <ButtonGroup vertical>
      <Button variant="outline-secondary" size="lg" className='CTA-button '><span className='CTA-module-text'>Become a member</span></Button>
      <Button variant="outline-secondary" size="lg" className='CTA-button '><span className='CTA-module-text'>Subscribe to fashion news</span></Button>
      </ButtonGroup>
      </div>
        </Modal.Body>
     
      </Modal>
    </>
  );

}

export default MembershipModal;