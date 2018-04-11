/**
 * Created by jiangtingqiang@gmail.com on 18-3-27.
 */

import React, {Component} from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {addBookToShelf} from '../../service/bookService';
import Book from "../search/Book";
import {findAllPublisher} from "../../service/publisherService";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class CreateBook extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //findAllPublisher();
    }

    handleAddPublisher = () => {
        findAllPublisher();
    };

    handleAdd = () => {
        const isbn = document.getElementById("isbnInput").value;
        const bookName = document.getElementById("bookName").value;
        const publisher = document.getElementById("publisher").value;
        const author = document.getElementById("author").value;
        const price = document.getElementById("price").value;
        var book = {
            isbn: isbn,
            name: bookName,
            author: author,
            publisher: publisher,
            price: price
        };
        book.isbn = isbn;
        addBookToShelf(book);
    };

    render() {
        const publishers = this.props.publisher;

        var arr = [];
        arr = Object.keys(publishers).map(function (key) {
            return publishers[key];
        });

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
                        title="添加书"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <div>
                        <TextField id="isbnInput" hintText="ISBN"/>
                        <br />
                        <TextField id="bookName" hintText="书名"/>
                        <br />
                        <SelectField
                            floatingLabelText="出版社"
                        >
                            {arr.length > 7 && arr && arr !== undefined ? arr.map(function (book, index) {
                                return (
                                    <MenuItem value={index} primaryText={book.name}/>
                                );
                            }) : null}
                        </SelectField>
                        <br />
                        <TextField id="author" hintText="作者"/>
                        <br />
                        <TextField id="price" hintText="价格"/>
                    </div>
                    <div>
                        <RaisedButton label="添加" primary={true} style={style} onClick={() => this.handleAdd()}/>
                        <RaisedButton label="获取出版社" primary={true} style={style}
                                      onClick={() => this.handleAddPublisher()}/>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}