import SideBar from "../Components/HostSidebar";


const Property = () => {



return(
<>
<form>
  <h2>Register Property</h2>
  <label>Address
  <input
  type="text"
  ></input>
  </label>

  <label>Parking Available
  <input
  type="number"
  placeholder="1"
  ></input>
  </label>


  <label>Property Image
  <input
  type="file"
  ></input>
  </label>
</form>
<SideBar/>
</>
)


}

export default Property;