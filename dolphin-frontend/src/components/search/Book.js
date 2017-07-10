/**
 * Created by dolphin on 28/6/2017.
 */

import React from 'react';
//import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../../models/store';
//import RaisedButton from 'material-ui/RaisedButton';
//import {bookType} from '../../models/type';
//import Utils from '../../common/Utils';

// 创建组件,注意使用ES6的写法
export default class Book extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //store.subscribe((state) => this.setState(state));
        console.log("componentWillMount",this.props.bookState);
        this.props.bookService.findBookById();
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillReceiveProps() {
        console.log("componentDidUpdate...");
    }

    componentDidMount() {
        console.log("componentDidMount");
        console.log("componentDidMount界面上获取的数据props:", this.props);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate数据props:", this.props);
    }

    handleChange(e) {
        console.log("dfafgag:", e);
    }

    render() {
        //let {book} = this.props;
        //console.log("界面上获取的数据props:", this.props);
        console.log("界面上获取的数据state:", this.state);
//console.log("调用render");
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

