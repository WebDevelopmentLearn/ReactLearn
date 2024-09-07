import {Button, Form, Input} from "antd";
import {useState} from "react";
import {Content} from "antd/es/layout/layout";

export const MyForm = () => {
    const {form} = Form.useForm();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onFinish = (values) => {
        console.log(values);
        setUsername(values.username);
        setPassword(values.password);

        console.log("Success");
    }

    const onFinishFailed = (values) => {
        console.log(values);
        console.log("Failed");
    }

    return (
        <Form form={form} name="login" initialValues={{ remember: true}} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item label="Username" name="username" rules=
            {
                [
                    {
                        required: true,
                        message: "Input your name is incorrect"
                    }
                ]
            }>
                <Input/>
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{required: true, message: "Input your password is incorrect"}]}>
                <Input.Password/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>

            {(username && password) ?
            <Content>
                <p>Username: {username}</p>
                <p>Password: {password} </p>

            </Content> : null}

        </Form>
    )
}