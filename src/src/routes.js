import React from "react";
import { Navigate } from "react-router-dom";

import NotFound from './pages/error/NotFound';
import Search from './pages/search/Search';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';
import ForgotPassword from './pages/signin/ForgotPassword'

import RouteType from "./types/RouteType";

export default [
    {
        path: '/',
        exact: true,
        isPublic: true,
        type: RouteType.STATIC,
        label: null,
        errorElement: <NotFound />,
        component: <Navigate to='/search' />
    },
    {
        path: '/search',
        isPublic: true,
        type: RouteType.STATIC,
        label: 'Search',
        component: <Search />
    },
    {
        path: '/signup',
        isPublic: true,
        type: RouteType.PUBLIC,
        label: 'Sign up',
        component: <SignUp />
    },
    {
        path: '/signin',
        isPublic: true,
        type: RouteType.PUBLIC,
        label: 'Sign in',
        component: <SignIn />
    },
    {
        path: '/forgot-password',
        isPublic: false,
        type: null,
        label: 'Forgot password',
        component: <ForgotPassword />
    },
    {
        path: '*',
        isPublic: false,
        type: null,
        label: 'Sign in',
        component: <NotFound />
    }
];