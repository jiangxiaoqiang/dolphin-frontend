/**
 * Created by hldev on 18-3-27.
 */

import React, {Component} from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {addBookToShelf} from '../../service/bookService';
import Book from "../search/Book";

export default class CreateBook extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    handleAdd = () => {        
        const isbn = document.getElementById("isbnInput").value;
        const bookName = document.getElementById("bookName").value;
        const publisher = document.getElementById("publisher").value;
        const author = document.getElementById("author").value;
        const price = document.getElementById("price").value;
        var book = {
            isbn:isbn,
            name:bookName,
            author:author,
            publisher:publisher,
            price:price
        };
        book.isbn = isbn;
        addBookToShelf(book);
    }
    
    render() {
        
        const style = {
            margin: 12,
        };

        const AppBarExampleIcon = () => (
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );

        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="添加"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <div>
                        <TextField id="isbnInput" hintText="ISBN"/>
                        <br/>
                        <TextField id="bookName" hintText="书名"/>
                        <br/>
                        <TextField id="publisher" hintText="出版社"/>
                        <br/>
                        <TextField id="author" hintText="作者"/>
                        <br/>
                        <TextField id="price" hintText="价格"/>
                    </div>
                    <div>
                        <RaisedButton label="添加" primary={true} style={style} onClick={()=>this.handleAdd()}/>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}