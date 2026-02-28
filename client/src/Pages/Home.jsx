import React from "react";
import SideBar from "../Components/sidebar";
import axios from "axios"
import { useEffect, useState} from "react";



function Home() {
const [host, setHost] = useState([]);

useEffect(() =>{
  axios.get("http://localhost:3002/host")
  .then(res => setHost(res.data))
  .catch(err => console.log(err));
}, []);

  return(
    <> 
    <h1>Welcome</h1>
    <SideBar/>
    <div>
     {host.map(user => (
       <div key={user.id}>
         <h3>{user.firstName}</h3>
         <p>{user.email}</p>
         <p>{user.role}</p>
       </div>
     ))}
    </div>
    </>
    
  )
}

export default Home;