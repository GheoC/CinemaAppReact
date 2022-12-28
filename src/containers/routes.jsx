import Login from "./Login";
import PageNotFound from "../components/PageNotFound";
import Movies from "./Movies";
import Registration from "./Registration";
import Home from "../components/Home";

export default [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/movies",
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