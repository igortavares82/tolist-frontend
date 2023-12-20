import React from 'react'
import { Container, Row, Col } from 'shards-react';

const Footer = _ => {

    return (
        <div className="footer">
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
        </div>
    );
}

export default Footer;