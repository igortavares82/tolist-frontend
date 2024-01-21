import { combineReducers } from "redux";

import SearchReducer from './pages/search/SearchReducer';

const rootReducer = combineReducers({
    search: SearchReducer
});

export default rootReducer;