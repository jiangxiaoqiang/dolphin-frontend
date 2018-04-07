/**
 * Created by dolphin on 15/7/2017.
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import createLogger from 'redux-logger';
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import book from "./reducers/bookReducer"
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

export default createStore(
    combineReducers({
        math,
        user,
        book
    }),
    {},
    applyMiddleware(createLogger, thunk, promise())
);

