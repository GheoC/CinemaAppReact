import {Layout, Tabs} from "antd";
import {FaUsers} from "react-icons/fa";
import {TbMovie} from "react-icons/tb";
import {GrSchedulePlay} from "react-icons/gr";
import Users from "../Users";
import MoviesAdmin from "../MoviesAdmin";
import MovieEventsAdmin from "../MovieEventsAdmin";


function Admin() {
    return <Layout>
        <Layout.Content style={{marginLeft:"25px", marginTop:"25px", height:"81vh"}}>
            <Tabs
                type="card"
                size={"large"}
                defaultActiveKey="users"
                items={[
                    {
                        label: (<span style={{fontSize:"28px"}}><FaUsers size={"28px"}/> Users</span>),
                        key: 'users',
                        children: <Users/>
                    },
                    {
                        label: (<span style={{fontSize:"28px"}}><TbMovie size={"28px"}/> Movies</span>),
                        key: 'movies',
                        children: <MoviesAdmin/>,
                    },
                    {
                        label: (<span style={{fontSize:"28px"}}><GrSchedulePlay size={"28px"}/> Schedule Movies</span>),
                        key: 'movieEvents',
                        children: <MovieEventsAdmin/>,
                    },
                ]}
            />
        </Layout.Content>
    </Layout>
}

export default Admin;