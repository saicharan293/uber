import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoadding, setIsLoading] = useState(true)

    useEffect(()=>{
        if(!token){
            navigate('/captain-login')
        }
    },[token])

    const BASE_URL= 'http://localhost:4000'

    axios.get(`${BASE_URL}/captains/profile`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((res)=>{
      if(res.status == 200){
        setCaptain(res.data.captain)
        setIsLoading(false)
      }
    }).catch(err=>{
      console.error(err);
      localStorage.removeItem('token')
      navigate('/captain-login')
    })
    
    if(isLoadding){
      return(
        <div>Loading...</div>
      )
    }

  return (
    <>
      {children}
    </>
  )
}

export default CaptainProtectWrapper
