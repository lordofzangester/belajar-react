import './Navbar.scss';
import {Link, NavLink} from "react-router-dom";


export default function Sidebar() {
    return <nav>
        <Link className="logo" to="/">AL</Link>
        <div className="nav-link">
            <ul>
                <li>
                    <NavLink exact="true" activeclassname="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink exact="true" activeclassname="active" to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink exact="true" activeclassname="active" to={"/contact"}>Contact</NavLink>
                 </li>
            </ul>
        </div>
    </nav>
}