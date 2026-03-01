import HeaderLogo from "./HeaderLogo";
import HeaderNavLinks from "./HeaderNavLinks";
import SideBarNav from "./SideBarNav";

const HeaderLogoNavSection = () => {
    return (
        <section className="header-logonav centre" aria-label="header top logo and navigation section">
            <HeaderLogo />
            <SideBarNav />
            <HeaderNavLinks />
        </section>
    );
};
export default HeaderLogoNavSection;