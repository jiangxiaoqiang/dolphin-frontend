/**
 * Created by dolphin on 28/6/2017.
 */

import React from 'react';
//import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import RaisedButton from 'material-ui/RaisedButton';
//import {bookType} from '../../models/type';
//import Utils from '../../common/Utils';

// 创建组件,注意使用ES6的写法
export default class Book extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            book: {name: 'a'}
        }
    }

    componentWillMount() {
        console.log("componentWillMount");
        this.props.bookService.findBookById();
    }

    componentDidMount() {

    }


    render() {
        //let {book} = this.props;
        console.log("界面上获取的数据props:",this.props);
        console.log("界面上获取的数据state:",this.state);

        //console.log("获取的book是：", this.props.book);
        //const bookInfo = Utils.getToObject({book:'a'}, bookType.SUCCESS);
        //console.log("从state中取出的书籍信息是：", bookInfo);


        return (
            <MuiThemeProvider>
                <div>dd</div>
            </MuiThemeProvider>
        );
    }
}

