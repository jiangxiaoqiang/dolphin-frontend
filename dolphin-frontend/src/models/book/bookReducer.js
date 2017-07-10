/**
 * Created by yangbajing(yangbajing@gmail.com) on 2017-06-28.
 */

import {bookType} from '../type';
import {fromJS} from 'immutable';

const initState = {};

export default function bookReducer(state = fromJS(initState), action) {
    console.log("进入了bookReducer...");
    switch (action.type) {
        case bookType.SEARCH:
            console.log("search...");
            break;
        case bookType.SUCCESS:
            console.log("SUCCESS...action data:", action.book);
            console.log("reducer更新后的state",state.set(bookType.SUCCESS, fromJS(action.book)) )
            return state.set(bookType.SUCCESS, fromJS(action.book));
        default:
            return state;
    }
}

