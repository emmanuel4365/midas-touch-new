import SideBarIcon from "../assets/images/side-bar-icon.svg";
import MidasLogo from "../assets/images/brand-logo.svg";

const SideBarNav = () => {
  const closeSideBarNav = () => {
    const sidebarNav = document.querySelector(".sidebar-nav") as HTMLElement;
    sidebarNav.style.display = "none";
  };

  const openSideBarNav = () => {
    const sidebarNav = document.querySelector(".sidebar-nav") as HTMLElement;
    sidebarNav.style.display = "block";
  };

  return (
    <section className="sidebar-nav-container" aria-label="sidebar navigation section">
      <img src={SideBarIcon} alt="Sidebar Navigation Icon" id="sidebar-icon" onClick={openSideBarNav} />
      <aside className="sidebar-nav">
        <div className="sidebar-logo-icon">
          <img src={MidasLogo} alt="" />
          <svg xmlns="http://www.w3.org/2000/svg" width='40' height='40' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" onClick={closeSideBarNav}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </nav>
      </aside>
    </section>
  );
};
export default SideBarNav;