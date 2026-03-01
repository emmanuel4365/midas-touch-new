import SideBarIcon from "../assets/images/side-bar-icon.svg";

const SideBarNav = () => {
  return (
    <section className="sidebar-nav-container" aria-label="sidebar navigation section">
      <img src={SideBarIcon} alt="Sidebar Navigation Icon" id="sidebar-icon" />
      <aside className="sidebar-nav display-sidebar">
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