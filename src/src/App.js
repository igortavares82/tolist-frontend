import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

import Outline from './components/layout/Outline'
import routes from './routes';

// https://demos.creative-tim.com/muse-ant-design-dashboard/#/docs/layout
// https://demos.creative-tim.com/muse-ant-design-dashboard/?_ga=2.210187475.715017321.1704127969-1319543763.1702330450#/dashboard

/*
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
*/

export default props => (
    <Outline>
        Hello wrold.
    </Outline>
)
