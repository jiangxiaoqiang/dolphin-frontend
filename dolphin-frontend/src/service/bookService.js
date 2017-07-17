/**
 * Created by yangbajing(yangbajing@gmail.com) on 2017-06-28.
 */

import {request} from '../common/XHRClient';

export function findBookById() {
    const config = {method: 'get', url: 'http://localhost:8011/api/book/111'};
    return request(config);
}

