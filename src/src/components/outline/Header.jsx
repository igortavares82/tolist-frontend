import React from 'react';
import { Layout, Row, Col } from 'antd';
import VMenu from '../menus/VMenu';
import routes from '../../routes';

const { Header: AntHeader } = Layout;

const Header = props => {

    return (
        <AntHeader className="outline-box outline-header">
            <Row>
                <Col sm={{...props.config.sm.left}} lg={{...props.config.lg.left}}>                   
                </Col>
                <Col sm={{...props.config.sm.middle}} lg={{...props.config.lg.middle}}>
                    <span className="brand">.ToL<font color="#F94C10">y</font>st</span>
                    <VMenu />
                </Col>
                <Col sm={{...props.config.sm.right}} lg={{...props.config.lg.right}}>
                </Col>
            </Row>
        </AntHeader>
    );
}

export default Header;