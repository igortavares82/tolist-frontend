import React from "react";
import { Navigate } from "react-router-dom";

import NotFound from './pages/error/NotFound';
import Search from './pages/search/Search';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';

export default [
    {
        path: '/',
        exact: true,
        isPublic: true,
        label: null,
        errorElement: <NotFound />,
        component: <Navigate to='/search' />
    },
    {
        path: '/search',
        isPublic: true,
        label: 'Search',
        component: <Search />
    },
    {
        path: '/signup',
        isPublic: true,
        label: 'Sign up',
        component: <SignUp />
    },
    {
        path: '/signin',
        isPublic: true,
        label: 'Sign in',
        component: <SignIn />
    },
    {
        path: '*',
        isPublic: false,
        label: 'Sign in',
        component: <NotFound />
    }
];