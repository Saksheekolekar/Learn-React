import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css' 
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Github from './Components/Github/Github.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'

 
const router=createBrowserRouter([
  { path:'/',
   element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/> 
      },
      {
        path:'/About',
        element:<About/> 
      },
      {
        path:'/Github',
        element:<Github/> 
      },
      {
        path:'/Contact',
        element:<Contact/> 
      },
      {
        path:'/User',
        element:<User/> 
      }
    ]}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
