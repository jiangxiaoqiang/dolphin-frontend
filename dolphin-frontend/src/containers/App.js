/**
 * Created by dolphin on 30/6/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Main} from '../components/user/Main';
import {User} from '../components/user/User';
import {setName} from "../actions/userActions"
import {searchBookById} from "../actions/bookActions";
import Book from "../components/search/Book";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <Book books={this.props.books} searchBook={() => this.props.searchBookById("sssss") } book={this.props.book}/>
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);