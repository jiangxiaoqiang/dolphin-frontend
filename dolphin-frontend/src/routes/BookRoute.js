import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import React, {Component} from "react";
import * as bookService from "../models/book/bookService";
//import * as types from "../models/type";
import * as TYPES from "../models/type";
//import Route from 'react-router';
import {Route} from "react-router";
import SearchIndex from '../components/search/SearchIndex';

connect((book) => (book),
    dispath => ({
        //bookService: bindActionCreators(bookService, dispatch)
    }))

class BookRouteContaier extends Component {
    render() {
        return React.cloneElement(this.props.children, {TYPES, ...this.props});
    }
}

const bookSharingRoute = (
    <Route path="Book" component={BookRouteContaier}>
        <Route path="search" component={SearchIndex}>
        </Route>
    </Route>
);

export default bookSharingRoute;