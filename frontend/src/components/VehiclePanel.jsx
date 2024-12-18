import React from 'react'

const VehiclePanel = ({setVehiclePanel, setConfirmRide}) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={()=>setVehiclePanel(false)}>
          <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i>
        </h5>
        <div onClick={()=>setConfirmRide(true)} className='flex active:border-black mb-2 w-full p-3 border-2 rounded-xl items-center justify-between '>
          <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹193.20</h2>
        </div>
        <div onClick={()=>setConfirmRide(true)} className='flex active:border-black mb-2 w-full p-3 border-2 rounded-xl items-center justify-between '>
          <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className='ri-user-3-fill'></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Motorcycle rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹62</h2>
        </div>
        <div onClick={()=>setConfirmRide(true)} className='flex active:border-black mb-2 w-full p-3 border-2 rounded-xl items-center justify-between '>
          <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Uber Auto <span><i className='ri-user-3-fill'></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹112.98</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
