import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './styles/tolyst.css'

// https://designrevision.com/demo/shards-dashboard-lite-react/blog-overview
// https://designrevision.com/docs/shards-react/component/nav

export default props => (
    
    <Router basename={process.env.REACT_APP_BASENAME || ''}>
        <div>
            <Routes>
                {routes.map((route, index) => {
                    return (<Route  key={index} 
                                    path={route.path} 
                                    exact={route.exact} 
                                    element={route.component} />);
                })}
            </Routes>
        </div>      
    </Router>
);
