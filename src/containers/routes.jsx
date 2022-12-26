import Login from "./Login";
import PageNotFound from "../components/PageNotFound";
import Movies from "./Movies";
import Registration from "./Registration";

export default [
    {
        path: "/",
        element: <Movies/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Registration/>
    },
    {
        path: "*",
        element: <PageNotFound/>
    }
]