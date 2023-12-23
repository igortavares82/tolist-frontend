import React from 'react';

import Layout from '../../components/layout/Layout';
import PageTitle from '../../components/page-title/PageTitle';

import { 
    Container, 
    Card, 
    CardHeader, 
    CardBody, 
    Form, 
    FormInput, 
    FormGroup, 
    Button, 
    Row, 
    Col } 
from "shards-react";

const SignIn = _ => {

    return (
        <Layout>
            <Container>
                <Row>
                    <PageTitle  offset="4" 
                                sm="12" 
                                lg={{ offset: 3, size:6 }} 
                                subtitle="Sign in and dicover nice features." 
                                title="Sign in!" 
                                className="text-sm-left mb-3" />
                </Row>
                <Row>
                    <Col offset="4" sm="12" lg={{ offset: 3, size:6 }}>
                        <Card>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <label htmlFor='#email'>E-mail</label>
                                        <FormInput id="#email" placeholder="E-mail" />
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor='#password'>Password</label>
                                        <FormInput id="#password" placeholder="Password" />
                                    </FormGroup>
                                    <Button block>Send</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default SignIn;