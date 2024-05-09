import React from 'react';
import { Form, Input, Button } from 'antd';

import AuthApi from "../../api/AuthApi";
import PageTitle from '../../components/page-title/PageTitle';

const ForgotPassword = _ => {

    const authApi = new AuthApi();
    const [form] = Form.useForm();

    const onFinish = _ => {

        let data = { email: form.getFieldValue("email") };
        authApi.forgotPassword(data, resp => {

            if (!resp)
                return;

            form.resetFields()
        });
    }

    return (
        <>
            {authApi.contextHolder}
            <PageTitle  title="Forgot password" subtitle="Forgot your password?"/>
            <Form   form={form} 
                    wrapperCol={{ span: 8, offset: 8 }} 
                    autoComplete='off' 
                    onFinish={onFinish}>
                <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
                    <Input size="large" placeholder="email" maxLength="50"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>Submit</Button>
                </Form.Item>
            </Form>
        </>
    );
}


export default ForgotPassword;