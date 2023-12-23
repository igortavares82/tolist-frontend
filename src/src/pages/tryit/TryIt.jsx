import React from 'react';
import Search from '../../components/search/Search';
import Layout from '../../components/layout/Layout';
import PageTitle from '../../components/page-title/PageTitle';

import { 
    Container, 
    Row, 
    Col, 
    Alert
 } 
from 'shards-react';

const TryIt = _ => {
    
    const configuration = { offset: 3, size:6 };

    return (
        <Layout>
            <Container>
                <Row>
                    <PageTitle offset="4" sm="12" lg={configuration} subtitle="Let's finde better prices?" title="Try it!" className="text-sm-left mb-3" />
                </Row>
                <Row>
                    <Col sm="12" lg={configuration}>
                        <Search />
                    </Col>
                </Row>
            </Container>
        </Layout>
    ); 
}

export default TryIt;