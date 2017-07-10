import React, {Component} from "react";
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import Book from '../components/search/Book'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as bookService from "../models/book/bookService";
import * as userService from "../models/user/userService";
import store from '../models/store';
import {bookType} from '../models/type';
//import * as TYPES from "../models/type";

/**
 * mapStateToProps:这个函数的作用是确定哪些 Redux 全局的 state 是我们组件想要通过 props 获取
 */
const mapStateToProps = (state) => {
    return {
        book: state.book
    }
}

/**
 * mapDispatchToProps:这个方法的作用是确定 哪些action创建函数是我们想要通过props获取
 */
const mapDispatchToProps = (dispatch) => {
    return {
        bookService: bindActionCreators(bookService, dispatch)
        //userService: bindActionCreators(userService, dispatch)
    }
}

connect(mapStateToProps, mapDispatchToProps)
class BookContainer extends Component {
    render() {
        return React.cloneElement(this.props.children, {...this.props});
    }
}

//export default withRouter(BookContainer);

const routes = (
    <BrowserRouter>
        <BookContainer>
            <switch>
                <Route path="/book/:id"
                       render={(props) => <Book bookService={bookService} bookState={store.state}/>}/>
            </switch>
        </BookContainer>
    </BrowserRouter>
);

export default routes;