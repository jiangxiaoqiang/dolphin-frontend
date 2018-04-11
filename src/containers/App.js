/**
 * Created by dolphin on 30/6/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import { setName } from "../actions/userActions";
import {getAllPublishers} from "../actions/publisherAction";
import { searchBookById, getAllBooks } from "../actions/bookActions";
import Book from "../components/search/Book";
import BookShelf from "../components/user/BookShelf";
import { BrowserRouter, Route } from 'react-router-dom'
import { bookType } from "../type/BookType";
import { bindActionCreators } from "redux";
import * as bookService from "../service/bookService";
import CreateBook from "../components/book/CreateBook";
import Index from "../components/main/Index";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <Route path="/index" render={(props) => <Index />} />
                <Route path="/user/shelf" render={() => <BookShelf book={this.props.book} />} />
                <Route path="/book/create" render={() => <CreateBook book={this.props.book} publisher={this.props.publisher} />} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math,
        book: state.book,
        publisher: state.publisher
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        searchBookById: (name) => {
            dispatch(searchBookById(name));
        },
        getAllBooks: (book) => {
            dispatch(getAllBooks(book));
        },
        getAllPublishers:(publisher)=>{
            dispatch(getAllPublishers(publisher));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);