import Login from "./Login";
import PageNotFound from "../components/PageNotFound";
import Movies from "./Movies";
import Registration from "./Registration";
import Home from "../components/Home";
import MovieDetails from "./MovieDetails";
import Tickets from "./Tickets";


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
        path: "/movies/:id",
        element: <MovieDetails/>
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
        path: "/tickets",
        element: <Tickets/>,
        needsAuth: true
    },
    {
        path: "*",
        element: <PageNotFound/>
    }
]