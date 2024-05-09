import React from 'react';
import { Form, Input, Button, Select, Divider } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

import Outline from '../../components/outline/Outline';
import PageTitle from '../../components/page-title/PageTitle';
import Config from '../../Config'
import { passwordValidation } from '../../common';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import AuthApi from '../../api/AuthApi';

const SignIn = _ => {

    let authApi = new AuthApi();
    const [form] = Form.useForm();

    form.setFieldValue("email", "igor.meier@gmail.com");
    form.setFieldValue("password", "Igor@1982");

    const onFinish = _ => {

        let data = { 
            email: form.getFieldValue("email"), 
            password: form.getFieldValue("password") 
        };

        authApi.signin(data);
    }
    
    return (
        <>
            {authApi.contextHolder}
            <PageTitle title="Sign In" subtitle="Sing in right now" />
            <Form   form={form} 
                    wrapperCol={{ span: 8, offset: 8 }} 
                    autoComplete='off'
                    onFinish={onFinish}>
                <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
                    <Input size="large" placeholder="email" maxLength="50" autoFocus />
                </Form.Item>
                <Form.Item name="password">
                    <Input.Password size="large" 
                                    placeholder="password" 
                                    maxLength="15"
                                    iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>Submit</Button>
                </Form.Item>
                <Form.Item>
                    <a href='#/signup' style={{float: "left"}}>register now</a>
                    <a href='#/forgot-password' style={{float: "right"}}>forgot password</a>
                </Form.Item>
            </Form>
        </>
    );
}

export default SignIn;