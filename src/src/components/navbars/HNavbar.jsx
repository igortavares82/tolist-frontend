import React from 'react';
import { Nav, NavItem, NavLink, Container,Row, Col } from "shards-react";
import Brand from './Brand';

const HNavbar = props => {

    const setActive = (name) => {
        var _class = "navbar-item";

        if (window.location.href.indexOf(name) >= 0)
            _class = `${_class} navbar-active`

        return _class
    }

    return (
        <div className="navbar-wrapper">
            <Container>
                <Row>
                    <Col lg="6" sm="0">
                       <Brand />
                    </Col>
                    <Col lg="6" sm="12">
                        <Nav justified className="navbar">
                            <NavItem className={setActive('try-it')}>
                                <NavLink href="/try-it">try it</NavLink>
                            </NavItem>
                            <NavItem className={setActive('signup')}>
                                <NavLink href="/signup">sign up</NavLink>
                            </NavItem>
                            <NavItem className={setActive('signin')}>
                                <NavLink href="/signin">sign in</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HNavbar;