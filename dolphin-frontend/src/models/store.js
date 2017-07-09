/**
 * Created by yangbajing(yangbajing@gmail.com) on 2017-06-28.
 */
import {combineReducers, createStore,applyMiddleware} from "redux";
import bookReducer from './book/bookReducer';
import userReducer from './user/userReducer';
import thunkMiddleware from "redux-thunk";
import {Iterable} from "immutable";
import {createLogger} from 'redux-logger';

//const nameList = ['book'];

const state = {};
/*for (const name of nameList) {
    //state[name] = bookReducer;
    state[name] = require(`./${name}/${name}Reducer`);

}*/

state[0] = bookReducer;
state[1] = userReducer;
const middleware = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
        stateTransformer: (state) => {
            let newState = {};
            for (let i of Object.keys(state)) {
                if (Iterable.isIterable(state[i])) {
                    newState[i] = state[i].toJS();
                } else {
                    newState[i] = state[i];
                }
            }
            return newState;
        }
    });
    middleware.push(logger);
}

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