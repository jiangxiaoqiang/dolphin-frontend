/**
 * Created by dolphin on 28/6/2017.
 */

import React from 'react';
import {render} from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';

// 创建组件,注意使用ES6的写法
export default class SearchIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkAll: true
        };
    }

    componentWillMount() {
        this.props.bookService.findBookById(134);
    }

    componentDidMount() {

    }

    render() {
        return (
            <RaisedButton label="确定"/>
        );
    }
}
