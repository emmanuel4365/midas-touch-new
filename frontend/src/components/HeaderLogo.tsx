import BrandLogo from "../assets/images/brand-logo.svg";
const HeaderLogo = () => {
    return (
        <div className="header-logo" aria-describedby="The Midas Touch Logo">
            <img src={BrandLogo} alt="Midas Touch Logo" id="The Midas Touch Logo" />
        </div>
    );
};
export default HeaderLogo;