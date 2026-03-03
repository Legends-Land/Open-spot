import React from "react";
import { Navigate, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//Creating a function be ran when a user logs in
const Login = ()=> {
  //useState is allowing to update the values that are placed
  //in the input section
const [values, setValues] = useState({
  email: "",
  password: "",
});

//Created a function to grab the values from the input and store them
const handleEvent = (e) =>{
setValues({...values, [e.target.name]: e.target.values})
e.preventDefault();
console.log("Name", e.target.name)
console.log("Email", e.target.email)
}
 
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const respone = await axios.post("http://localhost:3002/auth/login")
    console.log('Login Complete')
    Navigate("/home")
  } catch(err){
    console.log("Not able to log in")
  }
};



  return(
    <>
    <h2>Login Page</h2>
    <input 
    name=""
    placeholder="email"
    type = ""
    onChange={handleEvent}
    />
    <input 
    name=""
    placeholder= "password" 
    type = ""
    onChange={handleEvent}
    />
    <button
    onClick={handleSubmit}
    >Login</button>
    
    <button>Register</button>

    <Link to = "/home">Register</Link>
    </>
  )
};
export default Login;