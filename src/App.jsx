import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Country from './pages/Country'
import About from './pages/About'
import Layout from './Components/Layout'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './pages/CountryDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [

      {
        path: '/',
        element: <Home />
      },

      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },

      {
        path: 'country/:id',
        element: <CountryDetails />
      },

      {
        path: 'country',
        element: <Country />
      },
    ]
  }

])


const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
