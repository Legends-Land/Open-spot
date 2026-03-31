import React from "react";
import HostSideBar from "../Components/HostSidebar";
import '../styles/Dashboard.css'
import Settings from "../Components/Settings";
import GuestSideBar from "../Components/GuestSideBar";
import HostHamburgerMenu from "../Components/HostHamburgerMenu";
import "../styles/HamburgerMenu.css"


const HostUserSettings = () =>{

return(
    <>
      <h2>User Settings</h2>
      <HostSideBar/>
      <HostHamburgerMenu/>
    <Settings/>
      
    </>
  )
} 

export default HostUserSettings