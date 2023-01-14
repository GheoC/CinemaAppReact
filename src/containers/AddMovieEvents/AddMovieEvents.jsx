import {Button, Card, Form, Input, Space, Typography} from "antd";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";

function AddMovieEvents({movieName, onFinish}) {
    return <Card style={{width: "840px", height: "770px", marginTop: "0px", marginLeft: "25px"}}>
        <Typography.Paragraph style={{fontSize: "26px"}}>Add movie events for "{movieName}"</Typography.Paragraph>
        <Form
            size={"large"} onFinish={onFinish}
            labelCol={{
                span: 9,
            }}
            wrapperCol={{
                span: 7,
            }}>
            <Form.List name="movieEvents">
                {(fields, {add, remove}) => (
                    <>
                        {fields.map(({key, name, ...restField}) => (
                            <Space
                                key={key}
                                style={{
                                    display: 'flex',
                                    marginBottom: 8,
                                }}
                                align="baseline"
                            >
                                <Form.Item
                                    {...restField}
                                    name={[name, 'room']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Missing Room',
                                        },
                                    ]}
                                >
                                    <Input style={{width: "100px"}} placeholder="Room"/>
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'playMovieDateTime']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Missing Date and Time',
                                        },
                                    ]}
                                >
                                    <Input style={{width: "250px"}} placeholder="Date && Time"/>
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'price']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Missing last name',
                                        },
                                    ]}
                                >
                                    <Input style={{width: "100px"}} placeholder="Price"/>
                                </Form.Item>

                                <MinusCircleOutlined onClick={() => remove(name)}/>
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined/>}>
                                Add Movie Event
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>

            <Button style={{display: "flex", justifyContent: "center"}} htmlType="submit"
                    type={'primary'}> Submit</Button>

            <br/>
            <br/>
        </Form>
    </Card>
}

export default AddMovieEvents;