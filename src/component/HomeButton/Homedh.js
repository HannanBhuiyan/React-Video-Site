import React,{useState } from 'react'
import ModalVideo from 'react-modal-video'
import getVideoId from 'get-video-id';


export default function Homedh() {
    const [isOpen, setOpen] = useState(false)
    let video = getVideoId("https://vimeo.com/785074335");
    console.log(video);
    const HandlerOk = ()=>{
        console.log('ok')
    }
  return (
    <>
         <ModalVideo channel='vimeo' autoplay callback={()=>console.log('ok')}  isOpen={isOpen} videoId={video.id}  onClose={() => setOpen(false)} />

<button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
    </>
  )
}
