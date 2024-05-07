import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import NotFound from './pages/error/NotFound';
import Search from './pages/search/Search';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';
import ForgotPassword from './pages/signin/ForgotPassword';
import { BsGear } from "react-icons/bs";

import RouteType from "./types/RouteType";

export default [
    {
        path: '/',
        exact: true,
        type: RouteType.STATIC,
        label: null,
        errorElement: <NotFound />,
        component: <Navigate to="/search" />
    },
    {
        key: "search",
        path: "/search",
        type: RouteType.STATIC,
        label: (<Link to="/search">Search</Link>),
        component: <Search />
    },
    {
        key: "signup",
        path: '/signup',
        type: RouteType.PUBLIC,
        label: (<Link to="/signup">Sign up</Link>),
        component: <SignUp />
    },
    {
        key: "signin",
        path: '/signin',
        type: RouteType.PUBLIC,
        label: (<Link to="/signin">Sign in</Link>),
        component: <SignIn />
    },
    {
        path: '/forgot-password',
        type: null,
        label: 'Forgot password',
        component: <ForgotPassword />
    },
    {
        key: "account",
        
    },
    {
        path: '*',
        type: null,
        label: 'Sign in',
        component: <NotFound />
    }
];