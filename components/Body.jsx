import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import WatchPage from "./WatchPage";


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/watch",
            element: <WatchPage />
        },
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;