import React from 'react'
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

const SignUp = props => {
    return (
        <Layout>
            <Container>
                <Row>
                    <PageTitle  offset="4" 
                                sm="12" 
                                lg={{ offset: 3, size:6 }} 
                                subtitle="Register and start right now." 
                                title="Sign up!" 
                                className="text-sm-left mb-3" />
                </Row>
                <Row>
                    <Col offset="4" sm="12" lg={{ offset: 3, size:6 }}>
                        <Card>
                            <CardBody>
                                <Form className="p-0 pb-3">
                                    <FormGroup>
                                        <label htmlFor='#name'>E-mail</label>
                                        <FormInput id="#name" placeholder="Full name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor='#email'>E-mail</label>
                                        <FormInput id="#email" placeholder="E-mail" />
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor='#password'>Password</label>
                                        <FormInput id="#password" placeholder="Password" />
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor='#password-confirmation'>Password confirmation</label>
                                        <FormInput id="#password-confirmation" placeholder="Password confirmation" />
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

export default SignUp;