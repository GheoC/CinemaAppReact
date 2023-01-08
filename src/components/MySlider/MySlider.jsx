import {Layout, Menu} from "antd";
import {SlHome, SlSettings} from "react-icons/sl";
import {TbMovie} from "react-icons/tb";
import {HiOutlineTicket} from "react-icons/hi";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {MdOutlineManageAccounts} from "react-icons/md";

function MySlider({isAuthenticated, role}) {
    const [collapsed, setCollapsed] = useState(true);
    const navigate = useNavigate();
    return <Layout.Sider width="200px" collapsible collapsed={collapsed}
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
            }),
            (isAuthenticated && {
                key: "profile",
                label: "MyAccount",
                icon: <MdOutlineManageAccounts/>,
                onClick: () => navigate("/profile")
            }),
            (role === 'ADMIN' && {
                key: "admin",
                label: "Admin",
                icon: <SlSettings/>,
                onClick: () => navigate("/admin")
            })
        ]}>

        </Menu>
    </Layout.Sider>
}

export default MySlider;