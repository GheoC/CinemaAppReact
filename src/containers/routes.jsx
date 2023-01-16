import Login from "./Login";
import PageNotFound from "../components/PageNotFound";
import Movies from "./Movies";
import Registration from "./Registration";
import Home from "../components/Home";
import MovieDetails from "./MovieDetails";
import Tickets from "./Tickets";
import UserProfile from "./UserProfile";
import Admin from "./Admin";
import Schedule from "./Schedule/Schedule";


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
        path: "/schedule",
        element: <Schedule/>
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
        path: "/profile",
        element: <UserProfile/>,
        needsAuth: true
    },
    {
        path: "/admin",
        element: <Admin/>,
        role: "ADMIN"
    },
    {
        path: "*",
        element: <PageNotFound/>
    }
]