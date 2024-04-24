import {Link, NavLink} from "react-router-dom";
import './Navi.css';

export function Navi(): JSX.Element {
    return <nav className="navbar">
        <Link to={"/"} className="navbar-title">ToDo-Board</Link>
        <ul className={"navbar-items"}>
            <li className="nav-item">
                <NavLink to={"/"}>All</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={"/open"}>Open</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={"/inprog"}>In Progress</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={"/done"}>Done</NavLink>
            </li>
        </ul>

    </nav>
}