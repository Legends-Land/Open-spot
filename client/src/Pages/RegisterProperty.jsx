import HostHamburgerMenu from "../Components/HostHamburgerMenu";
import HostSideBar from "../Components/HostSidebar";
import "../styles/HamburgerMenu.css"
import "../styles/Dashboard.css"


const RegisterProperty = () => {



return(
<div>

  <h2>Register Property</h2>
  <div className="app-layout">

  <HostHamburgerMenu/>
    <HostSideBar/>

    </div>

<div>
<form>
  <label>Address
  <input
  type="text"
  ></input>
  </label>

  <label>City
  <input
  type="text"
  ></input>

  </label>
  <label>Zip Code
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
</div>
</div>
)


}

export default RegisterProperty;