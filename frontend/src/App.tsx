import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import LandingPage from "./pages/LandingPage";

//Lazy load the pages
const HomePage = lazy(() => new Promise((resolve) => {
    setTimeout(resolve, 2000);
}).then(() => import("./pages/HomePage")));
const LandingPage = lazy(() => import("./pages/LandingPage"));

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