import React from 'react';
import { Layout, Row, Col } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link, HashRouter } from 'react-router-dom';

import routes from '../../routes';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import NotFound from '../../pages/error/NotFound';

const Outline = props => {

    const config = {
        sm: {
            left: { span: 4 },
            middle: { span: 16 },
            right: { span: 4 }
        },
        lg: {
            left: { span: 4 },
            middle: { span: 16 },
            right: { span: 4 }
        }
    }

    return (
        <>
            <HashRouter>
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
                                <Route path="" component={<NotFound />} />
                            </Routes>
                        </Content>
                        <Footer config={config} />
                    </div>
                </Layout>
            </HashRouter>
        </>
    );
}

export default Outline;