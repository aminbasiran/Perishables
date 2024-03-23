import React from 'react'
import { Navigate, } from 'react-router-dom'

export const RequireAuth = ({children}) => {

    
    return (
        <div>
            {currentUser !== null ? children : <Navigate to="/login"/>}
        </div>
    )
}
