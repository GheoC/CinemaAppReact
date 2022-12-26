import Login from "./Login";
import PageNotFound from "../components/PageNotFound";
import Movies from "./Movies";

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
        path: "*",
        element: <PageNotFound/>
    }
]