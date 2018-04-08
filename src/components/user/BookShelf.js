import React, {Component} from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import {findAllBooks} from '../../service/bookService';
import {Utils} from "handlebars";
import DolphinUtils from "../../common/DolphinUtils";
import store from "../../store";

export default class BookShelf extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    handleFetch() {
        findAllBooks();
    }

    render() {

        const book1 = this.props.book;

        let state = store.getState();

        const books = state.book;
        let arr = [];
        if (books && books.book && books.book.length > 0) {
            for (let i in books.book) {
                arr.push(books.book[i]);
            }
        }

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
                        title="我的书架"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>序号</TableHeaderColumn>
                                    <TableHeaderColumn>书名</TableHeaderColumn>
                                    <TableHeaderColumn>作者</TableHeaderColumn>
                                    <TableHeaderColumn>出版社</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {arr.length > 0 && arr && arr !== undefined ? arr.map(function (book, index) {
                                    return (
                                        <TableRow>
                                            <TableRowColumn>{index + 1}</TableRowColumn>
                                            <TableRowColumn>{book.name}</TableRowColumn>
                                            <TableRowColumn>{book.author}</TableRowColumn>
                                            <TableRowColumn>{book.publisher}</TableRowColumn>
                                        </TableRow>);
                                }) : null}
                            </TableBody>
                        </Table>
                    </div>
                    <div>
                        <RaisedButton label="查看" primary={true} style={style} onClick={() => this.handleFetch()}/>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}



