import React from 'react'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
    const token = localStorage.getItem('token')

    const navigate = useNavigate()

    const BASE_URL= 'http://localhost:4000'
    axios.get(`${BASE_URL}/captain/logout`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((res)=>{
        if(res.status==200){
            localStorage.removeItem('token');
            navigate('/captain-login')
        }
    })
  return (
    <div>
      captain logout
    </div>
  )
}

export default CaptainLogout
