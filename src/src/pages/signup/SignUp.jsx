import React from 'react'
import { Form, Input, Button, Select, Row, Col } from 'antd';

import Outline from '../../components/outline/Outline';
import PageTitle from '../../components/page-title/PageTitle';
import Config from '../../Config';
import { passwordValidation } from '../../common';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = props => {

    const [form] = Form.useForm();
    
    const passwordEquality = (rule, value) => {

        var passwordValue = form.getFieldValue("password");

        if (!passwordValue || value == passwordValue)
            return Promise.resolve();

        return Promise.reject("'password confirmation' must be equal to 'password'");
    }

    return (
        <>
            <PageTitle title="Sign up" subtitle="It is easy, simple and fast" />
            <Form form={form} wrapperCol={{ span: 8, offset: 8 }} autoComplete='off'>
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
                            rules={[{ required: true }, { validator: passwordEquality }]}>
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