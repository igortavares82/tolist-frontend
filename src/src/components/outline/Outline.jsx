import { Layout, Row, Col } from 'antd';
import Header from './Header'
const { Footer, Slider, Content } = Layout;

const Outline = props => {

    const lg = { span: 8 }
    const config = {
        lg: {
            left: { span: 4 },
            middle: { span: 16 },
            right: { span: 4 }
        }
    }

    return (
        <>
            <Layout>
                <Header config={config} />
                <Content>
                    <Row>
                        <Col></Col>
                        <Col>
                            {props.children}
                        </Col>
                        <Col></Col>
                    </Row>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
}

export default Outline;