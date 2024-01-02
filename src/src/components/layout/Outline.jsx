import { Layout, Row, Col } from 'antd';
import Header from './Header'
const { Footer, Slider, Content } = Layout;

const Outline = props => {

    const lg = { span: 8 }
    const sm = {}

    return (
        <>
            <Layout>
                <Header lg={lg} />
                <Content>
                    <Row>
                        <Col lg={lg}></Col>
                        <Col lg={lg}>
                            {props.children}
                        </Col>
                        <Col lg={lg}></Col>
                    </Row>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
}

export default Outline;