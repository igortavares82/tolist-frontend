import { Layout, Row, Col } from 'antd';
const { Content: AntContent } = Layout;

const Content = props => {
    
    return (
        <AntContent className="outline-box outline-content">
            <Row>
                <Col lg={{...props.config.lg.left}}></Col>
                <Col lg={{...props.config.lg.left}}>
                    {props.children}
                </Col>
                <Col lg={{...props.config.lg.left}}></Col>
            </Row>
        </AntContent>
    );
}

export default Content;