import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Row, Col, Menu } from 'antd';

import routes from '../../routes';
import RouteType from "../../types/RouteType";

import AuthApi from '../../api/AuthApi';

const VMenu = props => {

    let authApi = new AuthApi();
    let targetType = authApi.isAuthenticated() ? RouteType.PRIVATE : RouteType.PUBLIC;
    let hrefs = window.location.href.split('/');
    let path = hrefs[hrefs.length -1];

    const [current, setCurrent] = useState(path);
    const items =  routes.filter(it => it.type === RouteType.STATIC || it.type === targetType);

    const handler = e => setCurrent(e.key);

    return (
        <Menu   className="menu-horizontal" 
                mode="horizontal" 
                selectedKeys={[current]} 
                onClick={handler} 
                items={items} /> 
    );
}

export default VMenu;