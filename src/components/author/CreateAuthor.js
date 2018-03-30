/**
 * Created by hldev on 18-3-27.
 */

import React, {Component} from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class CreateBook extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }


    render() {

        const style = {
            margin: 12,
        };

        const AppBarExampleIcon = () => (
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );

        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="添加"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <div>
                        <TextField id="a" hintText="ISBN"/>
                        <br/>
                        <TextField id="b" hintText="书名"/>
                        <br/>
                        <TextField id="c" hintText="出版社"/>
                        <br/>
                        <TextField id="d" hintText="作者"/>
                        <br/>
                        <TextField id="e" hintText="价格"/>
                    </div>
                    <div>
                        <RaisedButton label="提交" primary={true} style={style} />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}