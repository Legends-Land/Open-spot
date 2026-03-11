import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Property from './Pages/RegisterProperty'
import GuestDashboard from './Pages/GuestDashBoard'
import HostDashboard from './Pages/HostDashboard'
import RegisterVehicle from './Pages/RegisterVehicle'
import GuestUserSettings from './Pages/GuestUserSettings'
import HostUserSettings from './Pages/HostUserSettings'



function App() {


   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/hostdashboard" element={<HostDashboard />} />
        <Route path="/guestdashboard" element={<GuestDashboard />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/hostusersettings" element={<HostUserSettings/>} />
        <Route path="/property" element={<Property/>} />
        <Route path="/registervehicle" element={<RegisterVehicle/>} />
        <Route path="/guestusersettings" element={<GuestUserSettings/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
