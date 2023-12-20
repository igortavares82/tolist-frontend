import React from 'react';
import { Container, Card, Col } from 'shards-react';

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
            <Container fluid className="main-content-container mb-4">
                {props.children}
            </Container>
            <Footer />
        </>
    );
}

export default Layout;