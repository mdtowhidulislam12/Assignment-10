import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Main/Layout.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import AllVisas from './pages/AllVisas.jsx'
import AddVisa from './pages/AddVisa.jsx'
import MyAddedVisa from './pages/MyAddedVisa.jsx'
import MyVisaApplications from './pages/MyVisaApplications.jsx'
import Error from './pages/Error.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/allvisas',
        element:<AllVisas></AllVisas>
      },
      {
        path:'/addvisa',
        element:<AddVisa></AddVisa>
      },
      {
        path:'/myaddedvisas',
        element:<MyAddedVisa></MyAddedVisa>
      },
      {
        path:'/myvisaapplication',
        element:<MyVisaApplications></MyVisaApplications>
      },
      
      
    ]
  },
  {
    path:'*',
    element:<Error></Error>
  },
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
