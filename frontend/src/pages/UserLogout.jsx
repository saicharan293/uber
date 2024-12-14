import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {

    const token = localStorage.getItem('uber-user')

    const navigate = useNavigate()
    
    const BASE_URL= 'http://localhost:4000'
    axios.get(`${BASE_URL}/users/logout`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((res)=>{
        if(res.status==200){
            localStorage.removeItem('uber-user');
            navigate('/login')
        }
    })

  return (
    <div>
      User Logout
    </div>
  )
}

export default UserLogout
