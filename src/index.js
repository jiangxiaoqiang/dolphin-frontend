import React from 'react';
import ReactDOM from "react-dom";
import store from "./store";
import routes from "./routes/routes";
import {BrowserRouter, Route} from "react-router-dom";
import CreateBook from "./components/book/CreateBook";
import Book from "./components/search/Book";
import BookShelf from "./components/user/BookSelf";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/dolphin/create/book" component={CreateBook}></Route>
            <Route path="/dolphin/book/:id" component={Book}></Route>
            <Route path="/dolphin/user/shelf" component={BookShelf}></Route>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);
