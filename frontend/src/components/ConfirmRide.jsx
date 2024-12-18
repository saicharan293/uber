import React from 'react'

const ConfirmRide = ({setVehiclePanel, setVehicleFound, setConfirmRide}) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={()=>setVehiclePanel(false)}>
        <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i>
      </h5>
      <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>
      <div className='flex gap-2 justify-between items-center flex-col'>
        <img className='h-28' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="white super car" />
        <div className='w-full mt-3'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill text-lg"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-base text-gray-700'>Kankariya Talab, Ahmedabad</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-base text-gray-700'>Kankariya Talab, Ahmedabad</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 '>
            <i className="ri-currency-line text-lg"></i>
            <div>
              <h3 className='text-lg font-medium'>193.20</h3>
              <p className='text-base text-gray-700'>Cash</p>
            </div>
          </div>
        </div>
          <button onClick={()=>{
            setVehicleFound(true)
            setConfirmRide(false)
          }} className='w-full mt-3 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
      </div>
        
    </div>
  )
}

export default ConfirmRide
