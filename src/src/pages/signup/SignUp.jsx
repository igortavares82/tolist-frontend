import React from 'react'
import { Form, Input, Button, Select } from 'antd';

import Outline from '../../components/outline/Outline';
import PageTitle from '../../components/page-title/PageTitle';
import Config from '../../Config'

const SignUp = props => {

    return (
        <>
            <PageTitle title="Sign up" subtitle="It is easy, simple and fast" />
            <Form {...Config.fomLayout}>
                <Form.Item name="email">
                    <Input size="large" placeholder="email" />
                </Form.Item>
                <Form.Item name="name">
                    <Input size="large" placeholder="name" />
                </Form.Item>
                <Form.Item name="password">
                    <Input size="large" placeholder="password" />
                </Form.Item>
                <Form.Item name="password-confirmation">
                    <Input size="large" placeholder="password confirmation" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default SignUp;