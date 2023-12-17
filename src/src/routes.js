import React from "react";
import { Navigate } from "react-router-dom";

import TryIt from './pages/tryit/TryIt'

export default [
    {
        path: '/',
        layout: null,
        exact: true,
        component: <Navigate to='/try-it' />
    },
    {
        path: '/try-it',
        layout: null,
        component: <TryIt />
    }
];