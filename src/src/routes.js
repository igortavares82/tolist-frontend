import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import NotFound from './pages/error/NotFound';
import Search from './pages/search/Search';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';
import SignOut from './pages/signin/SignOut';
import ForgotPassword from './pages/signin/ForgotPassword';
import UpdatePassword from "./pages/signin/UpdatePassword";

import { BsGear } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaThList } from "react-icons/fa";

import RouteType from "./types/RouteType";
import AuthApi from "./api/AuthApi";

const getUserLabel = _ => {

    let auth = new AuthApi(false);

    if (!auth.isAuthenticated())
        return;

    let user = auth.getUser();

    return (
        <>
            <span>{user.unique_name}</span>
            <br />
            <small>{user.email}</small>
        </>
    );
}

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
        key: "home",
        path: "/home",
        type: RouteType.STATIC,
        label: (<Link to="/home">Home</Link>)
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
        path: "/signin",
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
        path: '/lists',
        type: RouteType.PRIVATE,
        label: 'Lists',
        component: <ForgotPassword />
    },
    {
        path: '/signout',
        type: null,
        component: <SignOut />
    },
    {
        path: '/update-password',
        type: null,
        component: <UpdatePassword />
    },
    {
        key: "myaccount",
        path: "",
        type: RouteType.PRIVATE,
        label: "Account",
        icon: <BsGear size={18}/>,
        children: [
            {
                type: "group",
                label: (getUserLabel()),
                children: [
                    {
                        label: "Manage",
                        key: "setting:1"
                    },
                    {
                        label: "Reset password",
                        key: "setting:2",
                        label: (<Link to="/update-password">Update password</Link>)
                    },
                    {
                        label: "Signout",
                        key: "setting:3",
                        label: (<Link to="/signout">Sign out</Link>)
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        type: null,
        label: 'Sign in',
        component: <NotFound />
    }
];