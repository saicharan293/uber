import React from 'react'

const LocationSearchPanel = ({setPanelOpen, setVehiclePanel}) => {

    // sample array for location 
    const locations = [
        "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
        "22C, Near Malhotra's cafe, Sheryians Coding School, Bhopal",
        "12B, Near Singhai's cafe, Sheryians Coding School, Bhopal",
        "11A, Near Charan's cafe, Sheryians Coding School, Bhopal",
    ]
  return (
    <div>
      {/* location search panel */}

      {
        locations.map(function(ele,idx){
            return <div onClick={()=>{
                setVehiclePanel(true)
                setPanelOpen(false)
            }} key={idx} className='flex active:border-black border-2 border-gray-50 rounded-xl p-3 gap-4 mb-4 items-center justify-start'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className='font-medium'>{ele}</h4>
          </div>
        })
      }
      
    </div>
  )
}

export default LocationSearchPanel
