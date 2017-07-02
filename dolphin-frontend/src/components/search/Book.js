/**
 * Created by dolphin on 28/6/2017.
 */

import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {bookType} from '../../models/type';

// 创建组件,注意使用ES6的写法
export default class Book extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.bookService.findBookById();
    }

    componentDidMount() {

    }


    render() {
        return (
            <MuiThemeProvider>
                <div>dd</div>
            </MuiThemeProvider>
        );
    }
}

export function getBook() {
    return dispatch => {
        setTimeout(() => dispatch({type: bookType.SUCCESS}), 1000)
    }
}

