import React from "react";
import SideBar from "../Components/sidebar";
import axios from "axios"
import { useEffect, useState} from "react";



function Home() {
const [host, setHost] = useState([]);
const [value, setValue] = useState({
  email: "",
  password: "",
});

const handleEvent = (e) =>{
 setValue({...value, [e.target.name]: e.target.value})
 e.preventDefault();
 console.log("Name", e.target.name)
 console.log("Value", e.target.value)
};

const handleSubmit = () =>{
  axios.post("http://localhost:3002/auth/login"),
  value
}


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
    <input 
    name="email" 
    placeholder="email" 
    type="email"
    onChange={handleEvent}
    />

    <input 
    name="password" 
    placeholder="password" 
    type=""
    onChange={handleEvent}
    />

    {/* <input 
    name="username" 
    placeholder="user name" 
    type=""
    onChange={handleEvent}
    /> */}
    <button
    onSubmit={handleSubmit}
    type="submit"
    >Submit</button>
    </>
    
  )
}

export default Home;