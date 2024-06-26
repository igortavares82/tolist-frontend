import React from 'react'
import { Form, Input, Button, Select, Row, Col } from 'antd';

import Outline from '../../components/outline/Outline';
import PageTitle from '../../components/page-title/PageTitle';
import Config from '../../Config';
import { passwordValidation, passworEquality } from '../../common';

import UserApi from "../../api/UserApi";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = props => {

    let userApi = new UserApi();
    const [form] = Form.useForm();

    form.setFieldValue("email", "igor.meier@gmail.com");
    form.setFieldValue("name", "Igor Tavares");
    form.setFieldValue("password", "Igor@1982");
    form.setFieldValue("password-confirmation", "Igor@1982");

    const cleanupForm = (cleanupForm) => {

        if (!cleanupForm)
            return;

        form.resetFields();
    }

    const onFinish = _ => {

        let data = { 
            email: form.getFieldValue("email"), 
            name: form.getFieldValue("name"),
            password: form.getFieldValue("password"),
            role: 1
        };

        userApi.post(data, cleanupForm);
    }
    
    return (
        <>
            {userApi.contextHolder}
            <PageTitle title="Sign up" subtitle="It is easy, simple and fast" />
            <Form   form={form} 
                    wrapperCol={{ span: 8, offset: 8 }} 
                    autoComplete='off' 
                    onFinish={onFinish}>
                <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
                    <Input size="large" placeholder="email" maxLength="50" autoFocus/>
                </Form.Item>
                <Form.Item name="name" rules={[{ required: true }]}>
                    <Input size="large" placeholder="name" maxLength="50"/>
                </Form.Item>
                <Form.Item  name="password" 
                            rules={[{ required: true }, { validator: passwordValidation }]}>
                    <Input.Password size="large" 
                                    placeholder="password" 
                                    maxLength="15"
                                    iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)} />
                </Form.Item>
                <Form.Item  name="password-confirmation" 
                            rules={[{ required: true }, { validator: _ => passworEquality(form) }]}>
                    <Input.Password size="large"
                                    placeholder="password confirmation" 
                                    maxLength="15"
                                    iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>Submit</Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default SignUp;