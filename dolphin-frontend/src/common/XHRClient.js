import axios from 'axios';
import store from "../store";
import {searchBookById} from "../actions/bookActions";

export function request(config) {
    return axios(config).then(
        response => {
            console.log("Axios请求服务端返回结果是：", response.data.data);
            const book = response.data.data;
            store.dispatch(searchBookById(book));
            Promise.resolve(response);
        }
    ).catch(
        error => {
            console.error(error);
            Promise.reject();
        }
    );
}
