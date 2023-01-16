import {Layout, Table, Typography} from "antd";

function ScheduleView({columns, movieEvents}) {
    return <Layout.Content>
        <Typography.Title>Schedule</Typography.Title>
        <Table columns={columns} dataSource={movieEvents} rowKey={"id"} size={"small"}
               pagination={{pageSize: 15, showSizeChanger: false}}
               style={{height: "800px", paddingLeft: "50px", paddingRight: "50px"}} showSizeChanger={false}/>
    </Layout.Content>
}

export default ScheduleView;