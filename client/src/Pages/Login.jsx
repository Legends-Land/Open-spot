import React, { use } from "react";
import { useNavigate, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//Creating a function be ran when a user logs in

function Login () {
  const navigate = useNavigate();
  //useState is allowing to update the values that are placed
  //in the input section
  const [values, setValues] = useState({
    email: "",
    password: "",
    role: "GUEST"
  });
  
  //Created a function to grab the values from the input and store them
  const handleEvent = (e) =>{
    setValues({...values, [e.target.name]: e.target.value})
    
    
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const respone = await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/login`,values)
      console.log('Login Complete')
      navigate("/home")
  

  } catch(err){
    console.log("Not able to log in")
  }
};



  return(
    <>
    <form>
    <h2>Login Page</h2>
    <input 
    name="email"
    placeholder="email"
    type = ""
    onChange={handleEvent}
    />
    <input 
    name="password"
    placeholder= "password" 
    type = ""
    onChange={handleEvent}
    />

    <label>
            <input
          type="radio"
          name="role"
          value="GUEST"
          checked={values.role === "GUEST"}
          onChange={handleEvent}
          /> Guest
          </label>

          <label>
            <input
          type="radio"
          name="role"
          value="HOST"
          checked={values.role === "HOST"}
          onChange={handleEvent}
          /> Host
          </label>

    <button
    onClick={handleSubmit}
    >Login</button>

    <button>Register</button>
    

    <Link to = "/register">Register Here</Link>
</form>
    </>

  )
};
export default Login;