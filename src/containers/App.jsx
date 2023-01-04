import {useAuthContext} from "../context/AuthProvider/AuthProvider";
import {useEffect, useState} from "react";
import axios from "axios";
import "../styles/App.css"
import {Route, Routes, useNavigate} from "react-router-dom";
import routes from "./routes";
import {Layout, Menu} from "antd";
import MyHeader from "../components/MyHeader";
import {TbMovie} from "react-icons/tb";
import {SlHome} from "react-icons/sl";
import {HiOutlineTicket} from "react-icons/hi";


function App() {
    const {setLoggedUser, username, logout} = useAuthContext();
    const [collapsed, setCollapsed] = useState(true);

    const navigate = useNavigate();

    let isAuthenticated = false;
    if (username !== '') {
        isAuthenticated = true;
    }
    const isTokenStillValid = async () => {
        const tokenFromStorage = localStorage.getItem("token");
        if (tokenFromStorage) {
            await axios.get(`http://localhost:8080/check-token/${tokenFromStorage}`)
                .then((response) => {
                    setLoggedUser(response.data);
                })
                .catch(() => {
                    localStorage.removeItem("token");
                });
        }
    };

    useEffect(() => {
        isTokenStillValid();
    }, [])

    return (
        <Layout>
            <Layout>
                <MyHeader isAuthenticated={isAuthenticated} username={username} logout={logout}></MyHeader>
            </Layout>
            <Layout className={"container"}>
                <Layout.Sider width="200px" collapsible collapsed={collapsed}
                              onCollapse={(value) => setCollapsed(value)}
                              style={{background: "#4f202d", color: "white"}}>
                    <div
                        style={{
                            height: 32,
                            margin: 16,
                            background: 'rgba(255, 255, 255, 0.2)',
                        }}
                    />
                    <Menu theme="dark" items={[
                        {
                            key: "home",
                            label: "Home",
                            icon: <SlHome/>,
                            onClick: () => navigate("/")
                        },
                        {
                            key: "movies",
                            label: "Movies",
                            icon: <TbMovie/>,
                            onClick: () => navigate("/movies")
                        },
                        (isAuthenticated && {
                            key: "tickets",
                            label: "MyTickets",
                            icon: <HiOutlineTicket/>,
                            onClick: () => navigate("/tickets")
                        })
                    ]}>

                    </Menu>
                </Layout.Sider>
                <Layout.Content>
                    <Routes style={{marginLeft: "45px", marginTop: "20px"}}>
                        {routes
                            .filter((route) =>
                                (route.needsAuth && route.needsAuth === isAuthenticated) || !route.needsAuth)
                            .map(({element, path}) => (
                                <Route key={path} path={path} element={element}></Route>
                            ))}
                    </Routes>
                </Layout.Content>
            </Layout>
            <Layout.Footer style={{background: "rgb(17,2,2)"}}>Footer</Layout.Footer>
        </Layout>)
}

export default App;