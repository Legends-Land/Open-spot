import React from "react";
import GuestSideBar from "../Components/GuestSideBar";
import GuestHamburgerMenu from "../Components/GuestHamburgerMenu";


const GuestDashboard = ()=> {
  console.log('Guest Page is running')
  return (
    <>
    <div className="app-layout">

    <h1>Guest  Dashboard</h1>
    {/* <GuestSideBar/> */}
    <GuestHamburgerMenu/>
    <GuestSideBar/>
    </div>
    </>
  )
};

export default GuestDashboard;