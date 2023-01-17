import React, { useState } from "react";
import { NavLink } from 'react-router-dom';


import Videos from './VideoApi'

import './Video.css';

import CustomModal from "./CustomModal";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 
 
const Video = () => {

    const [modalShow, setModalShow] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(Videos[0].videoLink);

    return(
        <>
            <div className="video_page_section">
                <div className="container">
                    <div className="video_page_inner">
                        <div className="video_header d-flex justify-content-between">
                            <div className="button_one">
                                <NavLink to="/" >Home</NavLink>
                            </div>
                            <div className="button_one">
                                <NavLink to='/' >Index</NavLink>
                            </div>
                        </div>
                        <div className="video_body">
                            <div className="video_list">  
                                <ul> 
                                    {
                                        Videos.map( (vid, index) => { 
                                            return (
                                                <>
                                                    <li key={index}>
                                                        <span  onClick={() => {
                                                            setSelectedVideo(vid.videoLink)
                                                            setModalShow(true)}} >{vid.name}</span>
                                                    </li>  
                                                </>
                                                
                                            )
                                        } )
                                    }  
                                </ul>
                                <MyVerticallyCenteredModal selectedVideo={selectedVideo}   show={modalShow}  onHide={() => setModalShow(false)} />  
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )

}


function MyVerticallyCenteredModal(props ) {
    
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
            { 
                props.selectedVideo
            } 
        </div>
        </Modal.Body> 
    </Modal>
    )

}


export default Video



 
 