/**
 * Created by yangbajing(yangbajing@gmail.com) on 2017-06-28.
 */

import {bookType} from '../type';
import {request} from '../XHRClient';
//import store from '../store';

export function findBookById() {
    console.log("进入findBookById...");
    const config = {method: 'get', url: 'http://localhost:8011/api/book/111'};
    const success = {
        type: bookType.SUCCESS,
    };
    return request(config,success);
}