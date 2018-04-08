/**
 * Created by dolphin on 30/6/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {setName} from "../actions/userActions"
import {searchBookById, getAllBooks} from "../actions/bookActions";
import Book from "../components/search/Book";
import BookShelf from "../components/user/BookShelf";
import {BrowserRouter, Route} from 'react-router-dom'
import {bookType} from "../type/BookType";
import {bindActionCreators} from "redux";
import * as bookService from "../service/bookService";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <Route path="/users" render={()=><BookShelf book={this.props.book}/>}/>
                {/*<BookShelf books={this.props.book} getBooks={() => this.props.getAllBooks(this.props.book) }/>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math,
        book: state.book
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);