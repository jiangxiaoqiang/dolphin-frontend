import React, {Component} from "react";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import Book from '../components/search/Book';
import BookCreate from '../components/book/CreateBook';
import App from "../containers/App";
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const routes = (
    <BrowserRouter>
        <App>
            {/*<switch>
                <Route path="/book/:id"
                       render={(props) => <Book />}/>
            </switch>*/}
            <switch>
                <Route path="book1/create" render={(props) => <BookCreate/>}/>
            </switch>
        </App>
    </BrowserRouter>
);

export default routes;