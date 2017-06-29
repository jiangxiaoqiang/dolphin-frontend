import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import SearchIndex from './components/search/SearchIndex'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './models/store';
import bookRoute from './routes/BookRoute';

const App = () => (
    <MuiThemeProvider>
        <SearchIndex />
    </MuiThemeProvider>
);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    rootElement
);
