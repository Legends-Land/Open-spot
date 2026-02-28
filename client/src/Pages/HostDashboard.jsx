import React from "react"
import { useState } from "react";
import SideBar from "../Components/sidebar";
import '../styles/hostDashboard.css'

// function  Host(){
// return(
//   <div>
//     Host Dashboard from Legend
//     <input/>
//   </div>
// )
// };


const Host = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <SideBar/>
    </div>
  );
};

export default Host;

