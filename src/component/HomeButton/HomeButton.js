import React, {useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import './HomeButton.css'

// import PlayVideos from '../PlayVideo/PlayVideoApi'
import Modal from 'react-bootstrap/Modal';
import video_1 from '../../video/v1.mp4'
import video_2 from '../../video/v2.mp4'



const video = [video_1, video_2]

const HomeButton = () => {


    const [modalShow, setModalShow] = useState(false);
    const [randomUrl, setRandomUrl] = useState('');

    const [currentVideo, setCurrentVideo] = useState(0);   


    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentVideo((currentVideo) => (currentVideo + 1) % video.length);
        }, 10000);
        return () => clearInterval(interval);
      }, []);



    // const handleShow = () => {
    //   var randomIndex = Math.floor(Math.random() * vi.length);
    //   var randomUrl = vi[randomIndex]; 
    //   setRandomUrl(randomUrl);
    //   setModalShow(true);
    // }
    
    
    return(
      

        <video controls src={video[currentVideo]} autoPlay loop />
           
    )
}



// function MyVerticallyCenteredModal(props ) {
  
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

 

//     return(
//         <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//     >
//         <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter"> 
//         </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <div className="video_item"> 
            
//             { props.url.vURL}
// {/*             
//            { setInterval(() => {
//                 { return props.url.videoLink}
//             }, 5000)} */}

//            {/* // for(let i = 0; i <= 20 ; i++ ){
//     //    setInterval(() => {
//     //     console.log(i)
//     //    }, 1000);
//     // } */}



//         </div>
//         </Modal.Body> 
//     </Modal>
//     )

// }

export default HomeButton