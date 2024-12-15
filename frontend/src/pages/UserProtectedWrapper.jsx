import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDatacontext } from '../context/UserContext'

const UserProtectedWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const {user, setUser} = useContext(UserDatacontext)

    useEffect(()=>{
        if(!token){
            navigate('/login')
        }

      const BASE_URL= 'http://localhost:4000'
      axios.get(`${BASE_URL}/users/profile`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }).then((res)=>{
        if(res.status==200){
          setUser(res.data.user)
          setIsLoading(false)
        }
      }).catch(err=>{
        console.log(err);
        localStorage.removeItem('token')
        navigate('/login')
      })

    },[token])

    if(isLoading){
      return(
        <div>Loading....</div>
      )
    }


  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper
