import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  // const [userData, setUserData] = useState({})
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const { captain,setCaptain } = useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async(e) =>{
    e.preventDefault()
    const captainData = {
      fullname:{
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }
    const BASE_URL= 'http://localhost:4000'
    const response = await axios.post(`${BASE_URL}/captains/register`,captainData)

    if(response.status==201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehicleCapacity('')
    setVehiclePlate('')
    setVehicleType('')
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's Our Captain's name?</h3>
          <div className='flex gap-4 mb-4'>
            <input
              type="text"
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
              className="bg-[#eeeeee] w-1/2 mb-6 rounded px-4 py-2 border text-base placeholder:text-base"
              placeholder="First name"
              required
            />
            <input
              type="text"
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}
              className="bg-[#eeeeee] w-1/2 mb-6 rounded px-4 py-2 border  text-base placeholder:text-base"
              placeholder="Last name"
              required
              />
          </div>
          <h3 className="text-lg font-medium mb-2">What's Our Captain's email?</h3>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              placeholder="email@example.com"
              required
              />
          <h3 className="text-lg font-medium w-full mb-2">Enter password</h3>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-lg"
            placeholder="password"
          />
          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-7">
            <input 
              type="text" 
              className="bg-[#eee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-lg"
              placeholder='Vehicle Color' 
              value={vehicleColor}
              onChange={(e)=>{
                setVehicleColor(e.target.value)
              }}
            />
            <input 
              type="text" 
              className="bg-[#eee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-lg"
              placeholder='Vehicle Plate' 
              value={vehiclePlate}
              onChange={(e)=>{
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className="flex gap-4 mb-7">
            <input 
              type="text" 
              className="bg-[#eee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-lg" 
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e)=>{
                setVehicleCapacity(e.target.value)
              }}
            />
            <select 
              required
              className="bg-[#eee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-lg"
              value={vehicleType}
              onChange={(e)=>{
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-lg">
            Create Captain Account
          </button>
        </form>
        <p className="text-center ">
          Already have an account?{" "}
          <NavLink to="/captain-login" className="text-blue-600">
            Login here as captain
          </NavLink>
        </p>
      </div>
      <div>
        <p className='text-[12px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of the Service apply. </span> </p>
      </div>
    </div>
  )
}

export default CaptainSignup
