import { Layout, Row, Col } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';

import routes from '../../routes';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Outline = props => {

    const config = {
        sm: {
            left: { span: 0 },
            middle: { span: 24 },
            right: { span: 0 }
        },
        lg: {
            left: { span: 4 },
            middle: { span: 16 },
            right: { span: 4 }
        }
    }

    return (
        <>
            
            <Layout className="outline-box">
                <div className='outline-box-content'>
                    <Header config={config} />
                    <Content config={config} {...props}>
                        <Routes>
                            {routes.map((route, index) => {
                                return (<Route  key={index} 
                                                path={route.path} 
                                                exact={route.exact} 
                                                element={route.component} />);
                            })}
                        </Routes>
                    </Content>
                    <Footer config={config} />
                </div>
            </Layout>
            
        </>
    );
}

export default Outline;