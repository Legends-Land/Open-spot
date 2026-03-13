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
import ProtectedRoutes from './routes/ProtectedRoutes'


function App() {


   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/hostdashboard" element={<ProtectedRoutes><HostDashboard /></ProtectedRoutes>} />
        <Route path="/guestdashboard" element={<ProtectedRoutes><GuestDashboard /></ProtectedRoutes>} />
        <Route path="/home" element={<ProtectedRoutes><Home/></ProtectedRoutes>} />
        <Route path="/hostusersettings" element={<ProtectedRoutes><HostUserSettings/></ProtectedRoutes>} />
        <Route path="/property" element={<ProtectedRoutes><Property/></ProtectedRoutes>} />
        <Route path="/registervehicle" element={<ProtectedRoutes><RegisterVehicle/></ProtectedRoutes>} />
        <Route path="/guestusersettings" element={<ProtectedRoutes><GuestUserSettings/></ProtectedRoutes>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
