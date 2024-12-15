import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import {UserDatacontext} from '../context/UserContext'

const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  // const [userData, setUserData] = useState({})
  const navigate= useNavigate()
  const {setUser} = useContext(UserDatacontext);

  const BASE_URL= 'http://localhost:4000'

  const submitHandler = async(e) =>{
    e.preventDefault()
    const newUser={
        fullname:{
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }
    const response = await axios.post(`${BASE_URL}/users/register`,newUser)

    if(response.status == 201){
      const data = response.data;
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

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
            Create User Account
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
        <p className='text-[12px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of the Service apply. </span> </p>
      </div>
    </div>
  )
}

export default UserSignup
