import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function ProjectCard({ name, imgSrc, currentTab, desc, dUrl, rUrl }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  

    return (
        <div>
        <div className={currentTab}>
            <img
            src={imgSrc}
            className="d-block w-100"
            alt="..."
            />
            <div className="carousel-caption d-md-block">
            <Button variant="btn btn-secondary" onClick={handleShow}>
                {name}
            </Button>
            </div>
        </div>
        <>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p id="projDesc">{desc}</p>
                <ul>
                    <li><a href={dUrl} target="_blank" rel="noreferrer">view deployment</a></li>
                    <li><a href={rUrl} target="_blank" rel="noreferrer">view repository</a></li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </>
        </div>
    );
};