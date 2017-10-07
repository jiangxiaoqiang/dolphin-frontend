import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from "./store";
import routes from "./routes/routes"
import injectTapEventPlugin from 'react-tap-event-plugin';

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root')
);
