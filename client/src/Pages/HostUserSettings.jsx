import React from "react";
import HostSideBar from "../Components/HostSidebar";
import '../styles/hostdashboard.css'
import Settings from "../Components/Settings";
import GuestSideBar from "../Components/GuestSideBar";


const HostUserSettings = () =>{

return(
    <>
    <Settings/>
    <HostSideBar/>
    </>
  )
} 

export default HostUserSettings