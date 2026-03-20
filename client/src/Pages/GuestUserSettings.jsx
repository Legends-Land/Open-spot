import React from "react";
import SideBar from "../Components/HostSidebar";
import '../styles/hostdashboard.css'
import Settings from "../Components/Settings";
import GuestSideBar from "../Components/GuestSideBar";


const GuestUserSettings = () =>{



  return(
    <>
    <h2>User Settings</h2>
    <GuestSideBar/>
    <Settings/>
    </>
  )
} 

export default GuestUserSettings;