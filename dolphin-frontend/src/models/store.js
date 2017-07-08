/**
 * Created by yangbajing(yangbajing@gmail.com) on 2017-06-28.
 */
import {combineReducers, createStore,applyMiddleware} from "redux";
import bookReducer from './book/bookReducer';
import thunkMiddleware from "redux-thunk";

//const nameList = ['book'];

const state = {};
/*for (const name of nameList) {
    //state[name] = bookReducer;
    state[name] = require(`./${name}/${name}Reducer`);

}*/

state[0] = bookReducer;
const middleware = [thunkMiddleware];

const reducers = combineReducers(state);

export function configureStore(initialState = {}) {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(...middleware)
    );
    console.info("创建Store...");
    return store;
}

const store = configureStore();

export default store;