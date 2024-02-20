import './Navbar.scss'
import {Link, NavLink} from "react-router-dom";

export default function SideBar () {
    return <>
        <div className="navbar">
            <Link className="logo" to="/">AL</Link>
            <nav >
                <NavLink exact="true" activeclassname="active" to={"/"}>Home</NavLink>
                <NavLink exact="true" activeclassname="active" to={"/about"}>About</NavLink>
                <NavLink exact="true" activeclassname="active" to={"/contact"}>Contact</NavLink>
            </nav>
        </div>
    </>
}