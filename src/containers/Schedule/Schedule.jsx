import {useEffect, useState} from "react";
import {getAllMovieEvents} from "../../api/movieEventsApi";
import {Button, DatePicker, Input, Layout, notification, Popconfirm} from "antd";
import {buyTicket} from "../../api/ticketsApi";
import {useAuthContext} from "../../context/AuthProvider/AuthProvider";
import {BiSearchAlt} from "react-icons/bi";
import ScheduleView from "../../components/ScheduleView";

function Schedule() {
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, msg) => {
        api[type]({
            message: 'Ticket bought successfully',
            description: msg,
        });
    };
    const {userId, username, logout} = useAuthContext();

    useEffect(() => {
        getAllMovieEvents('ACTIVE')
            .then((response) => {
                const extendedMovieEvents = response.data.map((singleData) => {
                    return {
                        ...singleData,
                        movieTime: new Date(singleData.playMovieDateTime).toTimeString().slice(0, 8),
                        movieDate: new Date(singleData.playMovieDateTime).toISOString().slice(0, 10)
                    }
                });
                setMovieEvents(extendedMovieEvents);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);

    const [movieEvents, setMovieEvents] = useState([]);
    const columns = [
        {
            title: "Movie",
            dataIndex: "movieName",
            width: "400px",
            filterDropdown: ({
                                 setSelectedKeys,
                                 selectedKeys,
                                 confirm
                             }) => {
                return (
                    <>
                        <Input
                            allowClear
                            autoFocus
                            placeholder="Type movie name here"
                            value={selectedKeys[0]}
                            onChange={(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : []);
                                confirm({closeDropdown: false});
                            }}
                        ></Input>
                    </>
                );
            },
            filterIcon: () => {
                return <BiSearchAlt/>;
            },
            onFilter: (value, record) => {
                return record.movieName.toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            title: "Date",
            dataIndex: "movieDate",
            filterDropdown: ({
                                 setSelectedKeys,
                                 selectedKeys,
                                 confirm
                             }) => {
                return (
                    <>
                        <DatePicker
                            onChange={(date) => {
                                const stringDate = date?.toISOString().slice(0, 8) + date.date();
                                setSelectedKeys(stringDate ? [stringDate] : []);
                                confirm({closeDropdown: false});
                            }}
                        ></DatePicker>
                    </>
                );
            },
            filterIcon: () => {
                return <BiSearchAlt/>;
            },
            onFilter: (value, record) => {
                return record.movieDate === value;
            }
        },
        {
            title: "Time",
            dataIndex: "movieTime"
        },
        {
            title: "Room",
            dataIndex: "room"
        },
        {
            title: "Price",
            dataIndex: "price"
        },
        {
            title: "Buy Ticket",
            render: (_, record) => (username &&
                <Popconfirm title={"Are you sure you want to buy this ticket"}
                            onConfirm={() => buyTicket(record.id, userId, record.price)
                                .then(() => openNotificationWithIcon(
                                    'success',
                                    `${username} bought ticket for movieEvent ${record.id} for ${record.price} lei`
                                ))
                                .catch((e) => {
                                    if (e.response.status === 401) {
                                        console.log("Token has expired! Login again")
                                        logout();
                                    }
                                })
                            }>
                    <Button type="primary" shape="round" size={"small"}>Buy Ticket</Button>
                </Popconfirm>
            )
        }
    ]

    return <Layout>
        {contextHolder}
        <ScheduleView columns={columns} movieEvents={movieEvents}/>
    </Layout>
}

export default Schedule;