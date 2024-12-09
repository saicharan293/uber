import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1724694745306-d2d421cc85c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
      <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
      <div className='bg-white pb-7 py-4 px-4 '>
        <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
        <NavLink to='/login' className='flex items-center justify-center w-full bg-black rounded py-3 text-white mt-5'>Continue</NavLink>
      </div>
    </div>
  )
}

export default Home
