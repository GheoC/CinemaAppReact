import {Layout, notification, Tabs} from "antd";
import {FaUsers} from "react-icons/fa";
import {TbMovie} from "react-icons/tb";
import {GrSchedulePlay} from "react-icons/gr";
import Users from "../Users";
import MoviesAdmin from "../MoviesAdmin";
import MovieEventsAdmin from "../MovieEventsAdmin";
import {useEffect, useState} from "react";
import {getMovies} from "../../api/moviesApi";


function Admin() {
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIconFromAdmin = (type, message, description) => {
        api[type]({
            message: message,
            description: description,
        });
    };
    const [movies, setMovies] = useState([]);
    const [triggerMoviesRender, setTriggerMoviesRender] = useState({});
    useEffect(() => {
        getMovies(undefined)
            .then((response) => {
                setMovies(response.data);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, [triggerMoviesRender]);

    return <Layout>
        {contextHolder}
        <Layout.Content style={{marginLeft: "25px", marginTop: "25px", height: "81vh"}}>
            <Tabs
                type="card"
                size={"large"}
                defaultActiveKey="users"
                items={[
                    {
                        label: (<span style={{fontSize: "28px"}}><FaUsers size={"28px"}/> Users</span>),
                        key: 'users',
                        children: <Users openNotificationWithIconFromAdmin={openNotificationWithIconFromAdmin}/>
                    },
                    {
                        label: (<span style={{fontSize: "28px"}}><TbMovie size={"28px"}/> Movies</span>),
                        key: 'movies',
                        children: <MoviesAdmin movies={movies} setTriggerMoviesRender={setTriggerMoviesRender}
                                               openNotificationWithIconFromAdmin={openNotificationWithIconFromAdmin}/>,
                    },
                    {
                        label: (
                            <span style={{fontSize: "28px"}}><GrSchedulePlay size={"28px"}/> Schedule Movies</span>),
                        key: 'movieEvents',
                        children: <MovieEventsAdmin movies={movies}
                                                    openNotificationWithIconFromAdmin={openNotificationWithIconFromAdmin}/>,
                    },
                ]}
            />
        </Layout.Content>
    </Layout>
}

export default Admin;