import React from 'react';
import { Container, Card, Col, Row } from 'shards-react';

import HNavbar from '../navbars/HNavbar';
import Footer from '../footer/Footer';

const Layout = props => {
    
    var isLogged = false;

    return (
        isLogged ? 
        <>
        </>
        :
        <>
            <HNavbar />
            <Container fluid className="main-content-container px-4">
                <Row>
                    <Col className="col-lg mb-4">
                        {props.children}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Layout;