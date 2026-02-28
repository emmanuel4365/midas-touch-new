import { Outlet } from "react-router-dom";
import HeaderTopSection from "../components/HeaderTopSection";
import HeaderLogoNavSection from "../components/HeaderLogoNavSection";
import { HeaderWrapper } from "../wrappers/HeaderWrapper";

const HomePage = () => {
    return (
        <>
            <HeaderWrapper className="header">
                <HeaderTopSection />
                <HeaderLogoNavSection />
            </HeaderWrapper>
            <Outlet />
            <footer className="footer">Footer</footer>
        </>
    );
};
export default HomePage;