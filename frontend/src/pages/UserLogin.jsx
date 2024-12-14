import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {UserDatacontext} from '../context/UserContext';
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})
  const {user, setUser} = useContext(UserDatacontext)
  const navigate=useNavigate()

  const submitHandler = async(e) =>{
    e.preventDefault();
    const userdata = {
      email: email,
      password: password
    }
    const BASE_URL= 'http://localhost:4000'

    const response = await axios.post(`${BASE_URL}/users/login`,userdata);

    if(response.status==200){
      const data = response.data
      setUserData(data.user)
      localStorage.setItem('uber-user',data.token)
      navigate('/home');
    }

    setEmail('');
    setPassword('');
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
            Login
          </button>
        </form>
        <p className="text-center ">
          New here?{" "}
          <NavLink to="/signup" className="text-blue-600">
            Create New Account
          </NavLink>
        </p>
      </div>
      <div>
        <NavLink to='/captain-login' className="bg-[#10b461] flex items-center justify-center mb-5 text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base">
          Sign in as Captain
        </NavLink>
      </div>
    </div>
  );
};

export default UserLogin;
