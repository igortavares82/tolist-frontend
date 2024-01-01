import { Layout } from 'antd';
import Header from './Header'
const { Footer, Slider, Content } = Layout;

const Outline = props => {

    const lg = { span: 4 }
    const sm = {}

    return (
        <>
            <Layout>
                <Header lg={lg} />
                <Content>
                    {props.children}
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
}

export default Outline;