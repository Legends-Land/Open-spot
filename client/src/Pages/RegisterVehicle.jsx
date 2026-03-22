import { useEffect, useState } from "react";
import GuestSideBar from "../Components/GuestSideBar"
import axios from "axios"

const RegisterVehicle = () => {
  const [make, setMake] = useState([]);

  useEffect(() => {
    axios.get ("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
    .then((res) => setMake(res.data.Results.map((car) =>({
      id: car.Make_ID,
      name: car.Make_Name,
    }))))
    .catch((err) => console.error ("Sorry can't Fetch Car Model:" , err))

  }, []);

  return(
    <>
    
    <h2>Register Vehicle</h2>
    
      <GuestSideBar/>
<form>
    <label> Make
      <input
    type="text"
  list="car-make" />
  <datalist id="car-make">
    {make.map((make) => (
      <option key={make.id} value={make.name} />
    ))}
  </datalist>
    
    </label>

    <label> Model
      <input
      type="text"
      ></input>
    </label>

    <label>Year
      <input
      type="number"
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

    <label> Color
      <input
      type="color"
      ></input>
    </label>
    </form>
    
    </>
  )
}

export default RegisterVehicle;