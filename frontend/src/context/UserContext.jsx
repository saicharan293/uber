import React, { createContext, useState } from 'react'

export const UserDatacontext = createContext()

const UserContext = ({children}) => {

   const [user, setUser] = useState({
    email:'',
    fullName:{
        firstName:'',
        lastName:''
    }
   })

   const [isLoading, setIsLoading] = useState(null)

  return (
    <div>
        <UserDatacontext.Provider value={{user, setUser, isLoading, setIsLoading}}>
            {children}
        </UserDatacontext.Provider>
    </div>
  )
}

export default UserContext
