import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'
import '../App.css'

const ErrorPage = () => {

    const error = useRouteError()

    return (
        <div>
            <h1>Oops! An Error Occurred</h1>
            {error && <p>{error.data}</p>}
            <NavLink to='/'><button>Go Home..!!!</button></NavLink>
        </div>
    )
}

export default ErrorPage
