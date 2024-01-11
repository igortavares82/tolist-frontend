import react, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import { Layout, Row, Col, Menu } from 'antd';

import routes from '../../routes';

const VMenu = props => {

    const [state, setState] = useState({ current: '/' });

    const handler = e => {
        setState({ current: e.key});
    }

    return (
        <>
            <Menu className="menu-horizontal" mode="horizontal" selectedKeys={state.current} onClick={handler}>
                {
                    routes.filter(it => it.isPublic == true)
                        .map((route, index) => {
                            return (
                                <Menu.Item key={route.path}>
                                    <Link to={route.path}>{route.label}</Link>
                                </Menu.Item>
                            );
                        })
                }
            </Menu>
        </>
    );
}

export default VMenu;