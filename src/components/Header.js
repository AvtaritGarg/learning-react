import { LOGO_URL } from "../utils/constants"

const Header = () => (
    <div className="header">
        <div className="res-logo">
            <img className="brandLogo" alt="Brand logo" src={LOGO_URL}></img>
        </div>
        <div className="navbar"><ul>
            <li className="nav-items">Home</li>
            <li className="nav-items">About Us</li>
            <li className="nav-items">Contact Us</li>
            <li className="nav-items">My Cart</li>
            </ul></div>
    </div>
)

export default Header