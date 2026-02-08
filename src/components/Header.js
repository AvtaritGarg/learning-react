import { LOGO_URL } from "../utils/constants"
import { useState} from "react"
import { Link } from "react-router-dom";


const Header = () => {

const [btnLogin, setBtnLogin] = useState("Login");

return(
    <div className="header">
        <div className="res-logo">
            <img className="brandLogo" alt="Brand logo" src={LOGO_URL}></img>
        </div>
        <div className="navbar"><ul>
            <li className="nav-items nav-text"><Link to="/">Home</Link></li>
            <li className="nav-items nav-text"><Link to="/about">About Us</Link></li>
            <li className="nav-items nav-text"><Link to="contact">Contact Us</Link></li>
            <li className="nav-items nav-text">My Cart</li>
            <button className="btn-login nav-items" onClick={()=>{
                btnLogin=="Login"?setBtnLogin("Logout"):setBtnLogin("Login")
            }}>{btnLogin}</button>
            </ul></div>
    </div>

)
}

export default Header