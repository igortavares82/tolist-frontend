import { Layout, Row, Col, Menu } from 'antd';
const { Header: AntHeader } = Layout;

const Header = props => {

    return (
        <AntHeader className="outline-header">
            <Row>
                <Col lg={{...props.config.lg.left}}>
                    <span className="brand">.ToL<font color="#F94C10">y</font>st</span>
                </Col>
                <Col lg={{...props.config.lg.middle}}>
                    <Menu mode="horizontal">
                        <Menu.Item>
                            Home
                        </Menu.Item>
                        <Menu.Item>
                            Try It
                        </Menu.Item>
                        <Menu.Item>
                            Sign up
                        </Menu.Item>
                        <Menu.Item>
                            Sign in
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col lg={{...props.config.lg.right}}>
                    right
                </Col>
            </Row>
        </AntHeader>
    );
}

export default Header;