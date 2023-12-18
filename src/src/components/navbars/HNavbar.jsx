import React from 'react';
import { Container, Row, Col } from 'shards-react';
import { Nav, NavItem, NavLink } from "shards-react";

const HNavbar = props => {
    return (
        <Nav justified>
            <NavItem>
                <NavLink href="/try-it">Try it</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Sign in</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Sign up</NavLink>
            </NavItem>
        </Nav>
    );
}

export default HNavbar;