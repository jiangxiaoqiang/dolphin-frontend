import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from './models/store';
import routes from './routes/routes';
import App from './components/search/Book';

ReactDOM.render(
    <Provider store={store}>{routes}</Provider>,
    document.getElementById('root')
)
;
