import {useAuthContext} from "../context/AuthProvider/AuthProvider";
import {useEffect, useState} from "react";
import axios from "axios";
import "../styles/App.css"
import {Route, Routes} from "react-router-dom";
import routes from "./routes";
import {Layout} from "antd";
import MyHeader from "../components/MyHeader";


function App() {
    const {setLoggedUser, username, logout} = useAuthContext();
    const [collapsed, setCollapsed] = useState(true);

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
                <Layout.Sider collapsedWidth={"0px"} width="300px" collapsible collapsed={collapsed}
                              onCollapse={(value) => setCollapsed(value)}
                              style={{background: "#4f202d", color: "white"}}>Slider
                </Layout.Sider>
                <Layout.Content style={{background:"#555"}} >
                    <Routes style={{marginLeft:"45px", marginTop:"20px"}}>
                        {routes.map(({element, path}) => (
                            <Route key={path} path={path} element={element}></Route>
                        ))}
                    </Routes>
                </Layout.Content>
            </Layout>
            <Layout.Footer style={{background: "rgb(17,2,2)"}}>Footer</Layout.Footer>
        </Layout>)
}

export default App;