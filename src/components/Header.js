import { LOGO_URL } from "../utils/constants"
import { useState} from "react"


const Header = () => {

const [btnLogin, setBtnLogin] = useState("Login");

return(
    <div className="header">
        <div className="res-logo">
            <img className="brandLogo" alt="Brand logo" src={LOGO_URL}></img>
        </div>
        <div className="navbar"><ul>
            <li className="nav-items nav-text">Home</li>
            <li className="nav-items nav-text">About Us</li>
            <li className="nav-items nav-text">Contact Us</li>
            <li className="nav-items nav-text">My Cart</li>
            <button className="btn-login nav-items" onClick={()=>{
                btnLogin=="Login"?setBtnLogin("Logout"):setBtnLogin("Login")
            }}>{btnLogin}</button>
            </ul></div>
    </div>

)
}

export default Header