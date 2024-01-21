import React from 'react';
import { Layout, Row, Col } from 'antd';
const { Content: AntContent } = Layout;

const Content = props => {
    
    return (
        <AntContent className="outline-box outline-content">
            <Row>
                <Col sm={{...props.config.sm.left}} lg={{...props.config.lg.left}}></Col>
                <Col sm={{...props.config.sm.middle}} lg={{...props.config.lg.middle}}>
                    {props.children}
                </Col>
                <Col sm={{...props.config.sm.right}} lg={{...props.config.lg.right}}></Col>
            </Row>
        </AntContent>
    );
}

export default Content;