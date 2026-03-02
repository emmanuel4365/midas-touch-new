import SideBarIcon from "../assets/images/side-bar-icon.svg";
import MidasLogo from "../assets/images/brand-icon-with-bg.svg";
import { CircleX } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import facebookIcon from "../assets/images/facebook-icon.svg";
import instagramIcon from "../assets/images/instagram-icon.svg";
import linkedinIcon from "../assets/images/linkedin-icon.svg";
import mailIcon from "../assets/images/mail-icon.svg";
import phoneIcon from "../assets/images/phone-icon.svg";

const SideBarNav = () => {
  const closeSideBarNav = () => {
    const sidebarNav = document.querySelector(".sidebar-nav") as HTMLElement;
    sidebarNav.style.display = "none";
  };

  const openSideBarNav = () => {
    const sidebarNav = document.querySelector(".sidebar-nav") as HTMLElement;
    sidebarNav.style.display = "block";
    sidebarNav.style.animation = "sidebarSlideIn 0.5s forwards";
  };

  return (
    <section className="sidebar-nav-container" aria-label="sidebar navigation section">
      <img src={SideBarIcon} alt="Sidebar Navigation Icon" id="sidebar-icon" onClick={openSideBarNav} />
      <aside className="sidebar-nav">
        <div className="sidebar-logo-icon">
          <img src={MidasLogo} alt="" />
          <CircleX size={40} onClick={closeSideBarNav} className="close-sidebar-icon" color="#ffffff" />
        </div>
        <nav className="sidebar-nav-links" aria-label="sidebar navigation links">
          <NavLink className="sidebar-nav-link home" to="/">Home</NavLink>
          <NavLink className="sidebar-nav-link" to="/about">About</NavLink>
          <NavLink className="sidebar-nav-link" to="/services">Services</NavLink>
          <NavLink className="sidebar-nav-link" to="/gallery">Gallery</NavLink>
          <NavLink className="sidebar-nav-link contact" to="/contact">Contact</NavLink>
        </nav>
        <div className="sidebar-socials">
          <Link to={"https://www.google.com/"} target="_blank">
            <img src={facebookIcon} alt="facebook icon" className="sidebar-facebook" />
          </Link>
          <Link to={""}>
            <img src={instagramIcon} alt="instagram icon" className="sidebar-instagram" />
          </Link>
          <Link to={""}>
            <img src={linkedinIcon} alt="linkedin icon" className="sidebar-linkedin" />
          </Link>
        </div>
        <div className="sidebar-contact-info">
          <div className="sidebar-mail">
            <img src={mailIcon} alt="mail icon" />
            <span>
              midastouchconsult33@gmail.com
            </span>
          </div>
          <div className="sidebar-phone">
            <img src={phoneIcon} alt="phone icon" />
            <span>
              09166661459
            </span>
          </div>
        </div>
        <p className="sidebar-copyright">
          &copy; {new Date().getFullYear()} The Midas Touch Consultancy.
        </p>
      </aside>
    </section>
  );
};
export default SideBarNav;