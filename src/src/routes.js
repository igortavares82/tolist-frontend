import React from "react";
import { Navigate } from "react-router-dom";

import TryIt from './pages/tryit/TryIt';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';

export default [
    {
        path: '/',
        layout: null,
        exact: true,
        isPublic: true,
        label: null,
        component: <Navigate to='/try-it' />
    },
    {
        path: '/try-it',
        layout: null,
        isPublic: true,
        label: 'Try It',
        component: <TryIt />
    },
    {
        path: '/signup',
        layout: null,
        isPublic: true,
        label: 'Signup',
        component: <SignUp />
    },
    {
        path: '/signin',
        layout: null,
        isPublic: true,
        label: 'Signin',
        component: <SignIn />
    }
];