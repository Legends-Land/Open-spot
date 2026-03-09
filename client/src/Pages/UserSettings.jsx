import React from "react";
import SideBar from "../Components/Sidebar";
import '../styles/hostdashboard.css'


const UserSettings = () =>{



  return(
    <>
    <form>
      <div>
        <h2>User Settings</h2>
      <labe>First Name</labe>
      <input
      type="text"
      placeholder="First Name"
      ></input>


      <label>Last Name</label>
      <input
      type="text"
      placeholder="Last Name"
      ></input>

      <label>Phone Number</label>
      <input
      type="number"
      placeholder="Last Name"
      ></input>

      <label>Profile Image</label>
      <input
      placeholder="Upload Profile Picture"
      ></input>
      </div>
    </form>
    <SideBar/>
    </>
  )
} 

export default UserSettings