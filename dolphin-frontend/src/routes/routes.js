import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import Book from '../components/search/Book'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as bookService from "../models/book/bookService";
import {bookType} from '../models/type';
import * as TYPES from "../models/type";

/*
 const hashHistory = createBrowserHistory();
 */

connect((state => ({
        book: state.book
    })),
    dispatch => ({
        bookService: bindActionCreators(bookService, dispatch)
    })
)

const User = ({match}) => {
    return <h1>Hello {match.params.username}!</h1>
}

class BookContainer extends Component {
    render() {
        return React.cloneElement(this.props.children, {...this.props});
    }
}

const routes = (
    <BrowserRouter>
        <BookContainer>
            <switch>
                <Route path="/book/:id" render={() => <Book bookService={bookService}/>}/>
            </switch>
        </BookContainer>
    </BrowserRouter>
);

export default routes;