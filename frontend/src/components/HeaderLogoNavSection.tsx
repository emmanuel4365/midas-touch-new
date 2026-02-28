import HeaderLogo from "./HeaderLogo";
import HeaderNavLinks from "./HeaderNavLinks";

const HeaderLogoNavSection = () => {
    return (
        <section className="header-logonav centre" aria-label="header top logo and navigation section">
            <HeaderLogo />
            <HeaderNavLinks />
        </section>
    );
};
export default HeaderLogoNavSection;