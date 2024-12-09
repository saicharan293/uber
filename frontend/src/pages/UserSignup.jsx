import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) =>{
    e.preventDefault()
    setUserData({
      username:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-base font-medium mb-2">What's your First name?</h3>
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
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              placeholder="email@example.com"
              required
              />
          <h3 className="text-lg font-medium w-full mb-2">Enter your password</h3>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-lg"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-lg">
            Login
          </button>
        </form>
        <p className="text-center ">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-600">
            Login here
          </NavLink>
        </p>
      </div>
      <div>
        <p className='text-[12px] leading-tight'>By proceeding, you consent to get cals, WhatsApp or SMS messages, including by automated means, from Uber and its affliates to the number provided.</p>
      </div>
    </div>
  )
}

export default UserSignup
