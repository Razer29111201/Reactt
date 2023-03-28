import { Link, NavLink } from "react-router-dom"
import './nav.scss'


const Nav = () => {
    return (
        <div class="w3-bar w3-green">
            <NavLink to="/covid" className="w3-bar-item w3-button">Home</NavLink>
            <NavLink to="/todo" className="w3-bar-item w3-button">NavLink 1</NavLink>
            <NavLink to="/time" className="w3-bar-item w3-button">NavLink 2</NavLink>
            <NavLink to="/apitodo" className="w3-bar-item w3-button">NavLink 3</NavLink>


        </div>
    )
}

export default Nav