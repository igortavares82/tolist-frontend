import { Layout, Row, Col } from 'antd';
import VMenu from '../menus/VMenu';
import routes from '../../routes';

const { Header: AntHeader } = Layout;

const Header = props => {

    return (
        <AntHeader className="outline-box outline-header">
            <Row>
                <Col sm={{...props.config.sm.left}} lg={{...props.config.lg.left}}>
                    <span className="brand">.ToL<font color="#F94C10">y</font>st</span>
                </Col>
                <Col sm={{...props.config.sm.left}} lg={{...props.config.lg.middle}}>
                    <VMenu />
                </Col>
                <Col sm={{...props.config.sm.left}} lg={{...props.config.lg.right}}>
                </Col>
            </Row>
        </AntHeader>
    );
}

export default Header;