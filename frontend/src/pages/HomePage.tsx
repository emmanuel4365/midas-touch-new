import { Outlet } from "react-router-dom";
import { HomePageHeaderWrapper } from "../wrappers/homePageHeaderWrapper";

const HomePage = () => {
    return (
        <>
            <HomePageHeaderWrapper className="homepage-header">HomePage</HomePageHeaderWrapper>
            <Outlet />
            <footer className="homepage-footer">Footer</footer>
        </>
    );
};
export default HomePage;