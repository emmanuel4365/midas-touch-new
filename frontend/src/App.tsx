import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Lazy load the pages
const HomePage = lazy(() => new Promise((resolve) => {
    setTimeout(resolve, 2000);
}).then(() => import("./pages/HomePage")));

const LandingPage = lazy(() => import("./pages/LandingPage"));

const ServicesPage = lazy(() => import("./pages/ServicesPage"));

const GalleryPage = lazy(() => import("./pages/GalleryPage"));

const ContactPage = lazy(() => import("./pages/ContactPage"));

const AboutPage = lazy(() => import("./pages/AboutPage"));

//Define the routes
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>,
        errorElement: <div>Error loading page</div>,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "services",
                element: <ServicesPage />
            },
            {
                path: "gallery",
                element: <GalleryPage />
            },
            {
                path: "contact",
                element: <ContactPage />
            }
        ]
    }
]);

//App component
const App = () => {
    return (
        <RouterProvider router={routes} />
    );
};
export default App;