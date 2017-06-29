/**
 * Created by yangbajing(yangbajing@gmail.com) on 2017-06-29.
 */

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import React, {Component} from "react";
import * as bookService from "../models/book/bookService";
import * as types from "../models/type";

@connect((book) => (book),
    dispath => ({
        bookService: bindActionCreators(bookService, dispatch),
        dispath
    }))

class BookRoute extends Component {
    render() {
        return React.cloneElement(this.props.children, {types, ...this.props});
    }
}

export default BookRoute;