import React, { use } from "react";
import { useNavigate, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css"

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
      // const respone = await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/login`,values)
      const response = await axios.post("http://localhost:3002/auth/login", values)
      console.log("Login Response:", response.data);
      console.log('Login Complete')
      navigate("/home")

      

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
  
      if (values.role === 'HOST') {
      navigate('/hostdashboard');
    } else if (values.role === 'GUEST') {
      navigate('/guestdashboard');
    }

  } catch(err){
    if (err.response?.status === 404) {
        setError("We couldn’t find an account with that email.");
      } else if (err.response?.status === 401) {
        setError("Incorrect password.");
      } else if (!err.response) {
        setError("Server not responding. Check your connection.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    console.log("Not able to log in")
  }

};



  return(
    <>
    <div className="login">
    <form>
    <h2>Open Spot</h2>
    <input 
    name="email"
    placeholder="email"
    type = ""
    onChange={handleEvent}
    />
    <input 
    name="password"
    placeholder= "password" 
    type = "password"
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

    {/* <button>Sign Up</button> */}
    

    <Link to = "/signup">Sign Up Here</Link>
</form>

</div>
    </>

  )
};
export default Login;