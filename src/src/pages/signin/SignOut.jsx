import React from 'react';
import AuthApi from '../../api/AuthApi';

const SignOut = _ => {
    
    let authApi = new AuthApi();
    authApi.signout();
}

export default SignOut;