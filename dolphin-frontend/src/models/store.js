/**
 * Created by yangbajing(yangbajing@gmail.com) on 2017-06-28.
 */
import {combineReducers, createStore} from "redux";

const nameList=[
    'book'
]

const state={};
/*for (name of nameList) {
    state[name] = require(`./${name}/${name}Reducer`);
}*/

const reducers = combineReducers(state);

export function configureStore(initialState = {}) {
    const store = createStore(
        reducers,
        initialState
        //applyMiddleware(...middlewares)
    );

    return store;
}

const store = configureStore();

export default store;