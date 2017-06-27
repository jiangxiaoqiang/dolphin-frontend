import React from 'react';
import ReactDOM from 'react-dom';
import SearchIndex from './components/search/SearchIndex'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
    <MuiThemeProvider>
        <SearchIndex />
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
