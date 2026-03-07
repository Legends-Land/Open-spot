import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";



function Register () {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    role: "GUEST"
  });

  const handleEvent = (e) => {
  setValues({...values, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/register`,values)
      // const response = await axios.post("http://localhost:3002/auth/register", values)
      console.log("Register Response:" , response.data);
      console.log("Received from tha backend");
      navigate('/')
      } catch(err) {
        console.error("Full Error|:", err.response?.data)

      }
    
    }; //Closing brackets for my function 
    
    return(
      <>
        <form>
          <h2>Register Page</h2>
          <input
          name="email"
          placeholder="email"
          type=""
          onChange={handleEvent}
          />
          <input
          name="password"
          placeholder="password"
          type=""
          onChange={handleEvent}
          />

          <button
          onClick={handleSubmit}
          >Register</button>

          <Link to = "/"> Login here</Link>

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
        </form>
    
    
      </>
    )
  };



export default Register;