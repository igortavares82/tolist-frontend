import { Layout, Row, Col } from 'antd';
const { Header: AntHeader } = Layout;

const Header = props => {

    return (
        <AntHeader style={{ background: "#fafafa" }}>
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