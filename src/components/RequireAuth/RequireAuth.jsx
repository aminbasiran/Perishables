import React from 'react'
import { Navigate, useOutletContext } from 'react-router-dom'

export const RequireAuth = ({children}) => {

    const {user} = useOutletContext()


    return (
        <div>
            {user !== null ? children : <Navigate to="/login"/>}
        </div>
    )
}
