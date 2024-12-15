import axios from 'axios';
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('')
  
  const {captain, setCaptain}= useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async(e) =>{
    e.preventDefault();
    const captain= {
      email: email, 
      password: password
    }
    const BASE_URL= 'http://localhost:4000'
    const response = await axios.post(`${BASE_URL}/captains/login`,captain)
    if (response.status === 200) {
      setCaptain(response.data.captain); // Update context
      localStorage.setItem('token', response.data.token);
      navigate('/captain-home');
    }

    setEmail('');
    setPassword('');
  }

  // captain@1234
  //captain@gmail.com

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="email@example.com"
            required
          />
          <h3 className="text-lg font-medium mb-2">Enter your password</h3>
          <input
            type="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Login as Captain
          </button>
        </form>
        <p className="text-center ">
          Join a fleet?{" "}
          <NavLink to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </NavLink>
        </p>
      </div>
      <div>
        <NavLink to='/login' className="bg-[#d5622d] flex items-center justify-center mb-5 text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base">
          Sign in as User
        </NavLink>
      </div>
    </div>
  )
}

export default CaptainLogin
