import React from 'react'
import { Container, Row, Col, Nav } from 'shards-react';

const Footer = _ => {

    return (
        <footer className="footer main-footer d-flex p-2 px-3 bg-white">
             <Container>
                <Row>
                    <Col>© 2023, made by Standard CO</Col>
                    <Col>
                        <ul className='footer-links'>
                            <li>ToLyst</li>
                            <li>About us</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;