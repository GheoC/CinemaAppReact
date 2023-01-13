import {Button, DatePicker, Form, Input, Select, Space, Typography, Upload} from "antd";
import {MinusCircleOutlined, PlusOutlined, UploadOutlined} from "@ant-design/icons";

function AddMovieView({onFinish}) {
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    return <>
        <Form size={"small"} onFinish={onFinish} style={{width: "800px"}}>
            <Form.Item name="name" requiredMark label={<label
                style={{fontSize: "16px", fontWeight: "Bolder"}}>Movie name:</label>}
                       rules={[{required: true, message: 'Movie name is required'}]}>
                <Input style={{fontSize: "16px"}}/>
            </Form.Item>

            <Form.Item name="trailer" requiredMark
                       label={<label style={{fontSize: "16px", fontWeight: "Bolder"}}>Trailer link:</label>}
                       rules={[{required: true, message: 'Trailer is required'}]}>
                <Input style={{fontSize: "16px"}}/>
            </Form.Item>

            <Form.Item
                name="upload"
                label="Upload Poster for Movie"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[{required: true, message: 'Poster file is required'}]}>
                <Upload name="logo" action="/upload.do" listType="picture" maxCount={1}>
                    <Button icon={<UploadOutlined/>}>Click to upload</Button>
                </Upload>
            </Form.Item>


            <Space style={{
                display: 'flex',
                marginBottom: 8,
            }}>
                <Form.Item name="is3D" requiredMark label={<label
                    style={{
                        fontSize: "16px",
                        fontWeight: "Bolder"
                    }}>3D</label>}
                           rules={[{required: true, message: '3D info is required'}]}>
                    <Select style={{width: "75px"}}>
                        <Select.Option value={"true"}>true</Select.Option>
                        <Select.Option value={"false"}>false</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="promoted" requiredMark label={<label
                    style={{
                        fontSize: "16px",
                        fontWeight: "Bolder"
                    }}>Promoted</label>}
                           rules={[{required: true, message: 'Promoted info is required'}]}>
                    <Select style={{width: "75px"}}>
                        <Select.Option value={"true"}>true</Select.Option>
                        <Select.Option value={"false"}>false</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="duration" requiredMark
                           label={<label style={{fontSize: "16px", fontWeight: "Bolder"}}>Duration:</label>}
                           rules={[{required: true, message: 'Duration is required'}]}>
                    <Input style={{fontSize: "16px", width: "75px"}}/>
                </Form.Item>

                <Form.Item name="imdb" requiredMark label={<label
                    style={{fontSize: "16px", fontWeight: "Bolder"}}>IMDB</label>}
                           rules={[{required: true, message: 'IMDB mark is required'}]}>
                    <Input style={{fontSize: "16px", width: "50px"}}/>
                </Form.Item>
            </Space>

            <Form.Item name="description" requiredMark label={<label
                style={{fontSize: "16px", fontWeight: "Bolder"}}>Description</label>}
                       rules={[{required: true, message: '3D info is required'}]}>
                <Input.TextArea style={{fontSize: "16px"}}/>
            </Form.Item>

            <Space style={{
                display: 'flex',
                marginBottom: 8,
            }}>
                <Form.Item name="director" requiredMark label={<label
                    style={{fontSize: "16px", fontWeight: "Bolder"}}>Director</label>}
                           rules={[{required: true, message: 'director name is required'}]}>
                    <Input style={{fontSize: "16px", width: "300px"}}/>
                </Form.Item>

                <Form.Item name="premierDate" requiredMark label={<label
                    style={{fontSize: "16px", fontWeight: "Bolder"}}>Premier Date</label>}
                           rules={[{required: true, message: 'Premier Date is required'}]}>
                    <DatePicker/>
                </Form.Item>
            </Space>

            <Space style={{
                display: 'flex',
                marginBottom: 8,
            }}>
                <Form.Item name="status" requiredMark label={<label
                    style={{fontSize: "16px", fontWeight: "Bolder"}}>Movie status</label>}
                           rules={[{required: true, message: 'Status is required'}]}>
                    <Select style={{width: "100px"}}>
                        <Select.Option value={"PLAYING"}>Playing</Select.Option>
                        <Select.Option value={"CANCELED"}>Canceled</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="language" requiredMark label={<label
                    style={{fontSize: "16px", fontWeight: "Bolder"}}>Language</label>}
                           rules={[{required: true, message: 'Language is required'}]}>
                    <Input style={{fontSize: "16px", width: "150px"}}/>
                </Form.Item>

                <Form.Item name="subtitles" requiredMark label={<label
                    style={{fontSize: "16px", fontWeight: "Bolder"}}>Subtitles</label>}
                           rules={[{required: true, message: 'Language is required'}]}>
                    <Input style={{fontSize: "16px", width: "150px"}}/>
                </Form.Item>
            </Space>


            <Typography.Paragraph style={{fontSize: "16px", fontWeight: "Bolder"}}>Celebrities:</Typography.Paragraph>
            <Form.List name="celebrities">
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
                                    name={[name, 'name']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Missing name',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Name"/>
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)}/>
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined/>}>
                                Add Celebrity
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>

            <Typography.Paragraph style={{fontSize: "16px", fontWeight: "Bolder"}}>Genres:</Typography.Paragraph>
            <Form.List name="genres">
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
                                    name={[name, 'genre']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Missing genre',
                                        },
                                    ]}
                                >
                                    <Select placeholder="genre" style={{width: "100px"}}>
                                        <Select.Option value={"ACTION"}>Action</Select.Option>
                                        <Select.Option value={"ADVENTURE"}>Adventure</Select.Option>
                                        <Select.Option value={"COMEDY"}>Comedy</Select.Option>
                                        <Select.Option value={"DRAMA"}>Drama</Select.Option>
                                        <Select.Option value={"FANTASY"}>Fantasy</Select.Option>
                                        <Select.Option value={"HORROR"}>Horror</Select.Option>
                                        <Select.Option value={"ROMANCE"}>Romance</Select.Option>
                                        <Select.Option value={"SCIENCE_FICTION"}>SF</Select.Option>
                                        <Select.Option value={"THRILLER"}>Thriller</Select.Option>
                                        <Select.Option value={"WESTERN"}>Western</Select.Option>
                                        <Select.Option value={"FAMILY"}>Family</Select.Option>
                                        <Select.Option value={"CRIME"}>Crime</Select.Option>
                                    </Select>
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)}/>
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined/>}>
                                Add Genre
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>

            <Button style={{
                height: "50px",
                padding: "0px 50px",
                fontSize: "24px",
                color: "indigo",
                fontWeight: "bolder"
            }} htmlType="submit" type={'primary'}> Submit</Button>
        </Form>
    </>
}

export default AddMovieView;