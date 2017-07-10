import axios from 'axios';
import {bookType} from './type';
import store from './store';

export function request(config, success) {
    console.log("进入Axios请求...");
    return axios({
        method: 'get', url: 'http://localhost:8011/api/book/111'
    }).then(
        response => {
            console.log("Axios请求服务端返回结果是：", response);
            const book = response.data;
            store.dispatch({
                type: bookType.SUCCESS,
                book
            });
            Promise.resolve(response);
        }
    ).catch(
        error => {
            console.error(error);
        }
    );
}
