import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sardines">Sardines</Link>
                <Link to="/anchovies">Anchovies</Link>
                <Link to="/cheese">Cheese</Link>
            </nav>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/sardines">Sardines</NavLink>
                <NavLink to="/anchovies">Anchovies</NavLink>
                <NavLink to="/cheese">Cheese</NavLink>
            </nav>
        </>
    )
}

export default NavBar;