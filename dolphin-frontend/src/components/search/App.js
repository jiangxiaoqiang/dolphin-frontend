/**
 * Created by dolphin on 30/6/2017.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


const App1 = () => (
    <MuiThemeProvider>
        <RaisedButton/>
    </MuiThemeProvider>
);

class App extends React.Component {


    render() {
        return (
            <App1/>
        )
    }
}