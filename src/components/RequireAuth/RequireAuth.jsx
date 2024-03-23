import React from 'react'
import { Navigate,useOutletContext } from 'react-router-dom'

export const RequireAuth = ({children}) => {

    const {currentUser} = useOutletContext()
    
    return (
        <div>
            {currentUser !== null ? children : <Navigate to="/login"/>}
        </div>
    )
}
