import React from "react";
import SideBar from "../Components/HostSidebar";
import '../styles/Dashboard.css'
import Settings from "../Components/Settings";
import GuestSideBar from "../Components/GuestSideBar";
import GuestHamburgerMenu from "../Components/GuestHamburgerMenu";


const GuestUserSettings = () =>{



  return(
    <>
    <h2>User Settings</h2>
    <GuestSideBar/>
    <GuestHamburgerMenu/>
    <Settings/>
    </>
  )
} 

export default GuestUserSettings;