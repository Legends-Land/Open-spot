import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Host from './Pages/hostDashboard'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Guest from './Pages/GuestDashBoard'



function App() {


   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/host" element={<Host />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
