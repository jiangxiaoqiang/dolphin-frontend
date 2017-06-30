import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import Book from './components/search/Book'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './models/store';
import routes from './routes/routes';

const App = () => (
    <MuiThemeProvider>
        <Book />
    </MuiThemeProvider>
);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    rootElement
);
