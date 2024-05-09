import React from "react";
import { useLocation } from "react-router-dom";
import { Form, Input, Button, Select, Row, Col } from 'antd';
 
import PageTitle from '../../components/page-title/PageTitle';
import { passwordValidation, passworEquality } from '../../common';
import AuthApi from "../../api/AuthApi";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const UpdatePassword = _ => {

    let authApi = new AuthApi();
    const [form] = Form.useForm();
    const search = useLocation().search;
    const token = new URLSearchParams(search).get("token");

    const onFinish = _ => {

        let data = {
            token: token,
            newPassword: form.getFieldValue("password")
        };

        authApi.updatePassword(data)
    }

    return (
        <>
            {authApi.contextHolder}
            <PageTitle  title="Update password" subtitle="Update your password"/>
            <Form   form={form} 
                    wrapperCol={{ span: 8, offset: 8 }} 
                    autoComplete='off' 
                    onFinish={onFinish}>
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

export default UpdatePassword;