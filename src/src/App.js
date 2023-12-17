import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import routes from './routes';

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
