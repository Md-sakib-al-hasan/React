
import { Link, NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div>
            <h1>Nav bar</h1>
            <nav>
                <Link to="/">Home</Link>
                <NavLink to="/about">About</NavLink>
                <Link to="/contact">Contact</Link>
                <Link to="/user">User</Link>
                <Link to="/post">post</Link>
            </nav>
        </div>
    );
};

export default Header;