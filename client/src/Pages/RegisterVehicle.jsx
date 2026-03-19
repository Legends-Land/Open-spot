import GuestSideBar from "../Components/GuestSideBar"

const RegisterVehicle = () => {

  return(
    <>
    
    <h2>Register Vehicle</h2>
    
      <GuestSideBar/>

    <label> Model
      <input
      type="text"
      ></input>
    </label>

    <label> Make
      <input
      type="texg"
      ></input>
    </label>

    <label>Year
      <input
      type="number"
      ></input>
    </label>

    <label> Color
      <input
      type="color"
      ></input>
    </label>

    <label> License No. 
      <input
      type="number"
      ></input>
    </label>

    <label> Body Type
      <input
      type="text"
      ></input>
    </label>
    
    </>
  )
}

export default RegisterVehicle;