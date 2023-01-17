import React, {useState } from "react";

import { NavLink } from "react-router-dom";
import './HomeButton.css'

// import PlayVideos from '../PlayVideo/PlayVideoApi'
import Modal from 'react-bootstrap/Modal';
import video_1 from '../../video/v1.mp4'
import video_2 from '../../video/v2.mp4'



const vi = [
    {
        vURL: video_1
    },

    {
        vURL: video_2
    }

]

const HomeButton = () => {


    const [modalShow, setModalShow] = useState(false);
    const [randomUrl, setRandomUrl] = useState('');
   

    const handleShow = () => {
      var randomIndex = Math.floor(Math.random() * vi.length);
      var randomUrl = vi[randomIndex]; 
      setRandomUrl(randomUrl);
      setModalShow(true);
    }
    
    
    return(
        <> 
           <div className="button_section">
                <div className="container">
                    <div className="button_inner">
                        <div className="button_group">
                            <div className="button_list">
                            <div>
                            <button  onClick={() => {
                                handleShow()
                                setModalShow(true)
                            } }  > Play Video</button>
 
                            <MyVerticallyCenteredModal url={randomUrl}  show={modalShow} onHide={() => setModalShow(false)} />  
                            </div>
                                <NavLink to="/video" >Index</NavLink>
                            </div>
                        </div>
                        <div className="statement">
                            <NavLink>Statement</NavLink>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}



function MyVerticallyCenteredModal(props ) {
  
    // const duration = video.duration;


    // console.log(duration);

    // if(duration > 0) {
    //     var minutes = parseInt(duration / 60, 10);
    //     var seconds = duration % 60;  
    // }  
   
    // console.log(minutes)
    // console.log(seconds)


    // var i = setInterval(function() {
    //     if(props.url.videoLink.readyState > 0) {
    //         var minutes = parseInt(props.url.videoLink / 60, 10);
    //         var seconds = props.url.videoLink % 60;
    
    //         // (Put the minutes and seconds in the display)
    
    //         clearInterval(i);
    //     }
    // }, 2000);

    // console.log(i)

 

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
            

{/*             
           { setInterval(() => {
                { return props.url.videoLink}
            }, 5000)} */}

           {/* // for(let i = 0; i <= 20 ; i++ ){
    //    setInterval(() => {
    //     console.log(i)
    //    }, 1000);
    // } */}



        </div>
        </Modal.Body> 
    </Modal>
    )

}

export default HomeButton