import axios from 'axios';
import store from "../store";
import {searchBookById} from "../actions/bookActions";

export function request(config) {
    console.log("进入Axios请求...");
    return axios({
        method: 'get', url: 'http://localhost:8011/api/book/111'
    }).then(
        response => {
            console.log("Axios请求服务端返回结果是：", response);
            const book = response.data;
            store.dispatch(searchBookById(book));
            Promise.resolve(response);
        }
    ).catch(
        error => {
            console.error(error);
        }
    );
}
