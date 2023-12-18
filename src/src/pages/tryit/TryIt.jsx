import React from 'react';
import { Container, Card, Col } from 'shards-react';

import HNavbar from '../../components/navbars/HNavbar';
import Search from '../../components/search/Search';

const TryIt = _ => {
    
    return (
        <Container fluid className="main-content-container">
            <HNavbar />
            <Search />
        </Container>
    );
}

export default TryIt;