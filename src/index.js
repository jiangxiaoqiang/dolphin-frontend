import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from "./store";
import routes from "./routes/routes"
import {BrowserRouter, Route} from "react-router-dom";
import CreateBook from "./components/book/CreateBook";
import Book from "./components/search/Book";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/create/book" component={CreateBook}></Route>
            <Route path="/book/:id" component={Book}></Route>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);
