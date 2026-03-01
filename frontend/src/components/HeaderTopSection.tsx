import { Link } from "react-router-dom";
import facebookIcon from "../assets/images/facebook-icon.svg";
import instagramIcon from "../assets/images/instagram-icon.svg";
import linkedinIcon from "../assets/images/linkedin-icon.svg";
import mailIcon from "../assets/images/mail-icon.svg";
import phoneIcon from "../assets/images/phone-icon.svg";

const HeaderTopSection = () => {
    return (
        <section className="header-top centre display-header-top" aria-label="header top contact section">
            <div className="header-top-left">
                <div className="header-top-left-item1">
                    <img src={mailIcon} alt="mail icon" />
                    <span>
                        midastouchconsult33@gmail.com
                    </span>
                </div>
                <div className="header-top-left-item2">
                    <img src={phoneIcon} alt="phone icon" />
                    <span>
                        09166661459
                    </span>
                </div>
            </div>
            <div className="header-top-right">
                <Link to={"https://www.google.com/"} target="_blank">
                    <img src={facebookIcon} alt="facebook icon" className="header-top-right-item1" />
                </Link>
                <Link to={""}>
                    <img src={instagramIcon} alt="instagram icon" className="header-top-right-item2" />
                </Link>
                <Link to={""}>
                    <img src={linkedinIcon} alt="linkedin icon" className="header-top-right-item3" />
                </Link>
            </div>
        </section>
    );
};
export default HeaderTopSection;