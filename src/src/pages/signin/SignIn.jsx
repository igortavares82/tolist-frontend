import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

import Outline from '../../components/outline/Outline';
import PageTitle from '../../components/page-title/PageTitle';
import Config from '../../Config'

const SignIn = _ => {

    const layout = {
        wrapperCol: { lg: 12, md: 24, sm: 24 },
    };

    return (
        <>
            <PageTitle title="Sign In" subtitle="Sing in right now" />
            <Form {...Config.fomLayout}>
                <Form.Item name="email">
                    <Input size="large" placeholder="email" />
                </Form.Item>
                <Form.Item name="password">
                    <Input size="large" placeholder="password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        
        </>
    );
}

export default SignIn;