import SearchReducerType from '../../types/SearchReducerType';
import React, { useState } from 'react';

const INITIAL_STATE = {
    isAutheticated: false
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case SigninReducerType.AUTHENTICATED:
            return { ...state, isAutheticated: action.payload }
    }
}