import { NavLink } from "react-router-dom";

const HeaderNavLinks = () => {
    return (
        <nav className="header-nav-links display-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
};
export default HeaderNavLinks;