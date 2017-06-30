import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import React, {Component} from "react";
import * as bookService from "../models/book/bookService";
//import * as types from "../models/type";
import * as TYPES from "../models/type";
//import Route from 'react-router';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AppContainer from "../container/AppContainer";
import Book from '../components/search/Book';
import App from '../components/search/App';

/*
 connect((book) => (book),
 dispath => ({
 //bookService: bindActionCreators(bookService, dispatch)
 }))
 */

/*class BookRouteContaier extends Component {
 render() {
 return React.cloneElement(this.props.children, {TYPES, ...this.props});
 }
 }*/


const routes = (
   /* <BrowserRouter>
        <div>
            <Provider store={store}>*/
                <Router>
                    <Route exact path="/" component={App} />
                </Router>
        /*    </Provider>
        </div>
    </BrowserRouter>*/
);

export default routes;