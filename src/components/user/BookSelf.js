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
import { getAllBooks } from '../../service/bookService';

export default class BookSelf extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    handleFetch() {
        getAllBooks();
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
                                <TableRow>
                                    <TableRowColumn>1</TableRowColumn>
                                    <TableRowColumn>John Smith</TableRowColumn>
                                    <TableRowColumn>John Smith</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>3</TableRowColumn>
                                    <TableRowColumn>Stephanie Sanders</TableRowColumn>
                                    <TableRowColumn>John Smith</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>4</TableRowColumn>
                                    <TableRowColumn>Steve Brown</TableRowColumn>
                                    <TableRowColumn>John Smith</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>5</TableRowColumn>
                                    <TableRowColumn>Christopher Nolan</TableRowColumn>
                                    <TableRowColumn>John Smith</TableRowColumn>
                                    <TableRowColumn>Unemployed</TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div>
                        <RaisedButton label="查看" primary={true} style={style} onClick={() => this.handleFetch()} />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}



