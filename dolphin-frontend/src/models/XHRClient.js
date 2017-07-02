import axios from 'axios';


export function request(config) {
    return axios(config).then(
        response => {
            console.log(response)
        }
    ).catch(
        error => {
            console.error(error)
        }
    );
}
