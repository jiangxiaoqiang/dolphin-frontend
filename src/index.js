import React from 'react';
import ReactDOM from "react-dom";
import store from "./store";
import routes from "./routes/routes";
import {BrowserRouter, Route} from "react-router-dom";
import CreateBook from "./components/book/CreateBook";
import CreatePublisher from "./components/book/CreatePublisher";
import Book from "./components/search/Book";
import BookShelf from "./components/user/BookShelf";
import CreateAuthor from "./components/author/CreateAuthor";
import Login from "./components/user/Login";
import App from "./containers/App";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>{routes}</Provider>
    , document.getElementById('root')
);


/*
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/book/id" component={Book}></Route>
            <Route path="/user/shelf" component={App}></Route>
            <Route path="/publisher/create" component={CreatePublisher}/>
            <Route path="/author/create" component={CreateAuthor}/>
            <Route path="/user/login" component={Login}/>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);
*/
