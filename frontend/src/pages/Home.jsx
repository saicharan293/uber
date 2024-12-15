import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRide, setConfirmRide] = useState(false)
  const panelref= useRef(null)
  const panelCloseRef= useRef(null)
  const vehiclePanelRef=useRef(null)
  const confirmRidePanelRef=useRef(null)
  

  const submitHandler=(e)=>{
    e.preventDefault()
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelref.current,{
        height:'70%',
        padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelref.current,{
        height:'0%',
        padding:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[ panelOpen ])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%'
      })
    }
  },[vehiclePanel])

  useGSAP(function(){
    if(confirmRide){
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(100%'
      })
    }
  },[confirmRide])


  return (
    <div className='h-screen relative overflow-hidden'>
      <img
          className="w-16 absolute left-5 top-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
        />
      <div className='h-screen w-screen'>
        {/* image for temporary use  */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 
            ref={panelCloseRef}
            onClick={()=>setPanelOpen(false)} 
            className='absolute opacity-0 right-6 top-6 text-2xl'>
              <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e)=>submitHandler(e)}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input 
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
              type="text" 
              placeholder='Add a Pick-up location' 
              value={pickup}
              onChange={(e)=>setPickup(e.target.value)}
              onClick={()=>setPanelOpen(true)}
            />
            <input 
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' 
              type="text" 
              placeholder='Enter your destination' 
              value={destination}
              onChange={(e)=>setDestination(e.target.value)}
              onClick={()=>setPanelOpen(true)}
            />
          </form>
        </div>
        <div ref={panelref} className="bg-white h-0">
          <LocationSearchPanel vehiclePanel={vehiclePanel} setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14 w-full">
        <VehiclePanel setConfirmRide={setConfirmRide} setVehiclePanel={setVehiclePanel} />
      </div>
      <div ref={confirmRidePanelRef} className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14 w-full">
        <ConfirmRide  />
      </div>
    </div>
  )
}

export default Home