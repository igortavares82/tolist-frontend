import React from "react";
import { Navigate } from "react-router-dom";

import TryIt from './pages/tryit/TryIt'
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';

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
    },
    {
        path: '/signup',
        layout: null,
        component: <SignUp />
    },
    {
        path: '/signin',
        layout: null,
        component: <SignIn />
    }
];