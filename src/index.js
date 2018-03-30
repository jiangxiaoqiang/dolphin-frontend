import React from 'react';
import ReactDOM from "react-dom";
import store from "./store";
import routes from "./routes/routes";
import {BrowserRouter, Route} from "react-router-dom";
import CreateBook from "./components/book/CreateBook";
import CreatePublisher from "./components/book/CreatePublisher";
import Book from "./components/search/Book";
import BookShelf from "./components/user/BookSelf";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/book" component={CreateBook}></Route>
            <Route path="/book/:id" component={Book}></Route>
            <Route path="/user/shelf" component={BookShelf}></Route>
            <Route path="/publisher/create" component={CreatePublisher}/>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);
