/**
 * Created by dolphin on 9/7/2017.
 */
import {fromJS} from 'immutable';

const initState = {};

export default function userReducer(state = fromJS(initState), action) {
    console.log("进入了userReducer...");
    switch (action.type) {
        default:
            return state;
    }
}