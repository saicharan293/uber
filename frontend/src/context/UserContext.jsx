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

  return (
    <div>
        <UserDatacontext.Provider value={{user, setUser}}>
            {children}
        </UserDatacontext.Provider>
    </div>
  )
}

export default UserContext
