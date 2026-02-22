import { LOGO_URL } from "../utils/constants"
import { useState} from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"



const Header = () => {
    
const onlineStatus = useOnlineStatus()

const [btnLogin, setBtnLogin] = useState("Login");

return(
    <div className=" bg-green-100 h-32 mb-8 flex justify-between">
        <div className="res-logo">
            <img className="brandLogo h-40" alt="Brand logo" src={LOGO_URL}></img>
        </div>
        <div className="">
            <ul className="p-10 h-full flex items-center gap-5">
                <li className=""><Link to="/">Home</Link></li>
                <li className="">Online status: {onlineStatus? "✅" : "🔴"}</li>
                <li className=""><Link to="/about">About Us</Link></li>
                <li className=""><Link to="contact">Contact Us</Link></li>
                <li className=""><Link to="/grocery">Grocery</Link></li>

                <button className="btn-login nav-items" onClick={()=>{
                    btnLogin=="Login"?setBtnLogin("Logout"):setBtnLogin("Login")
                }}>{btnLogin}</button>
            </ul>
        </div>
    </div>

)
}

export default Header