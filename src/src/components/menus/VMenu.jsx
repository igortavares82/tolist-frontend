import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Row, Col, Menu } from 'antd';

import routes from '../../routes';
import RouteType from "../../types/RouteType";

const VMenu = props => {

    var targetType = RouteType.PUBLIC;
    var hrefs = window.location.href.split('/');
    var path = hrefs[hrefs.length -1];
    const [state, setState] = useState({ current: `/${path}` });

    const handler = e => {
        setState({ current: e.key});
    }

    return (
        <>
            <Menu className="menu-horizontal" mode="horizontal" selectedKeys={state.current} onClick={handler}>
                {
                    

                    routes.filter(it => it.type === RouteType.STATIC || it.type === targetType)
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