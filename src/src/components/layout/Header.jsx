import { Layout, Row, Col } from 'antd';
const { Header: AntHeader } = Layout;

const Header = props => {

    return (
        <AntHeader className="tolyst-header" style={{ background: "#fafafa" }}>
            <Row>
                <Col {...props}>
                    .ToLyst
                </Col>
                <Col {...props}>
                    middle
                </Col>
                <Col {...props}>
                    right
                </Col>
            </Row>
        </AntHeader>
    );
}

export default Header;