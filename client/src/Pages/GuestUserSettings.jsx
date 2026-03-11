import React from "react";
import SideBar from "../Components/HostSidebar";
import '../styles/hostdashboard.css'
import Settings from "../Components/Settings";
import GuestSideBar from "../Components/GuestSideBar";


const GuestUserSettings = () =>{



  return(
    <>
    <Settings/>
    <GuestSideBar/>
    </>
  )
} 

export default GuestUserSettings;