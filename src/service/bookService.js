/**
 * Created by yangbajing(yangbajing@gmail.com) on 2017-06-28.
 */

import {request, requestWithAction} from '../common/XHRClient';

import {findBooksByName, createBookToShelf} from "../actions/bookActions";

export function findBookById() {
    const config = {method: 'get', url: 'http://localhost:8011/api/book/111'};
    return request(config);
}

export function getBooksByName(name) {
    const config = {
        method: 'get',
        url: '/api/book?name=' + name
    };
    return requestWithAction(config, findBooksByName);
}

export function addBookToShelf(book) {
    const config = {
        method: 'post',
        url: '/api/user/shelf/add',
        data: book
    };
    return requestWithAction(config, createBookToShelf)
}
