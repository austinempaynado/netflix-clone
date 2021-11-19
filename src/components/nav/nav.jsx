import {NavLink, useHistory} from 'react-router-dom'
import "./navStyles.css"

import logo from "../../constants/images/netflixLogo.png"
import {FaSearch} from "react-icons/fa"
import {FaUserAlt} from "react-icons/fa"
import {FaBell} from "react-icons/fa"

export const NavBar = () =>{
    const history = useHistory();
    const profileClick = () => history.push('/');
    

    return(
        <nav className="nav-bar">
            <img id="logo" src={logo} alt="Netflix logo" />
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink exact={true} to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact={true} to="/home">TV Shows</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact={true} to="/home">Movies</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact={true} to="/home">New &amp; Popular</NavLink>
                </li>
            </ul>
                
            <div id="right-nav">
                <button className="right-nav-item">{<FaSearch className="nav-icon"/>}</button>
                <button className="right-nav-item">{<FaBell className="nav-icon"/>}</button>
                <button className="right-nav-item" onClick={profileClick}>{<FaUserAlt className="nav-icon"/>}</button>
            </div>
        </nav>

    )
}