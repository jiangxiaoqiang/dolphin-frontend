/**
 * Created by jiangtingqiang(jiangtingqiang@gmail.com) on 2017-06-28.
 */

import {request, requestWithAction} from '../common/XHRClient';

import {findBooksByName, createBookToShelf, createPublisher} from "../actions/bookActions";
import globalConfig from "../global.config.json";

export function findBookById() {
    const config = {method: 'get', url: 'http://localhost:8011/api/book/111'};
    return request(config);
}

export function getBooksByName(name) {
    const config = {
        method: 'get',
        url: '/dolphin/api/book?name=' + name
    };
    return requestWithAction(config, findBooksByName);
}

export function getAllBooks() {
    const config = {
        method: 'get',
        url: globalConfig.apiServerUrl + '/dolphin/api/book/all/1'
    };
    return requestWithAction(config, findBooksByName);
}

export function addBookToShelf(book) {
    const config = {
        method: 'post',
        url: globalConfig.apiServerUrl + '/dolphin/api/user/shelf/add',
        data: book
    };
    return requestWithAction(config, createBookToShelf)
}


export function addPublisher(publisher) {
    const config = {
        method: 'post',
        url: globalConfig.apiServerUrl + '/dolphin/api/dic/publisher',
        data: publisher
    };
    return requestWithAction(config, createPublisher)
}
