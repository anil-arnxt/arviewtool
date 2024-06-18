'use client'
import React, { useEffect, useRef } from 'react'
import '../../src/app/globals.css'


const Modelviewer = ({props}) => {

        useEffect(()=>{

     setTimeout(() => {
         document.getElementById('loadingdiv').style.display = 'none'
       
     }, 3000);

    },[])

        useEffect(() => { import('@google/model-viewer').catch(console.error); }, []);



    const modelRef =  useRef();
  return (

      <div className='w-full'>  
      <div className='float-left w-12 h-12 m-4'>
    <a  href='' >  <img src='https://arnxtdealerpageproducts.s3.ap-south-1.amazonaws.com/back.png' alt="icon" className="w-10 h-10"/></a>

        </div>        
    <div className=" float-right w-12 h-12 m-4">
      
    <img src='https://codepencdn.unlimited3d.com/ar/assets/images/ar_icon.svg' alt="icon" className="w-12 h-12"/>
      
       </div>
      <div className="flex  justify-center   items-center w-full  h-screen" id={'loadingdiv'}>
         <div className="flex justify-item-center   w-fit flex-col" >
         <img  src="https://codepencdn.unlimited3d.com/ar/assets/images/loader.gif?=v0.1"  className="w-24 h-24" />
          <h2>Loading 3D...</h2>
          <p className="text-xs">Powered by ArNXT</p>
          <h4></h4>
         </div>
        

      </div>
   
      <div className='viewcontainer'>
<div className='modalcontainerar'>
    <model-viewer
      
   src= {props}
        ios-src =''
          modes="scene-viewer quick-look webxr"
           ar ar-scale = "fixed"
           environment-image="neutral"
          camera-controls touch-action="pan-y"
          
          shadow-intensity="1"
          crossorigin="anonymous" 
       
      ref={modelRef.current}
      style={{width:'100%', height:'100%',padding:'10px'}}
      
   >

<button slot="ar-button" id="ar-button">
    View in your space
  </button>


  <div id="ar-prompt">
    <img src="https://cdn.glitch.global/66a9aadc-16d1-4ae0-b613-4d181051d3c1/ar_hand_prompt.png?v=1680846318449"/>
  </div>

  <button id="ar-failure">
    AR is not tracking!
  </button>

   </model-viewer>

    </div>

</div>
</div> 



  )
}

export default Modelviewer
