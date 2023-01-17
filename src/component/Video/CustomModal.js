import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table } from "react-bootstrap";

const CustomModal = ( props ) => {

    return(
        
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter"> 
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="video_item"> 
                {props.videoLink} 
            </div>
            </Modal.Body> 
        </Modal>
        
    )

} 

export default CustomModal