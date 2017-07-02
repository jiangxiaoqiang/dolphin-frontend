/**
 * Created by yangbajing(yangbajing@gmail.com) on 2017-06-28.
 */
import {combineReducers, createStore} from "redux";
import bookReducer from './book/bookReducer';
import {bookType} from './type';

const nameList = ['book'];

const state = {};
for (const name of nameList) {
    state[name] = require(`./${name}/${name}Reducer`);
}

const reducers = combineReducers(state);

export function configureStore(initialState = {}) {
    const store = createStore(
        reducers,
        initialState
    );
    return store;
}

const store = configureStore();

export default store;