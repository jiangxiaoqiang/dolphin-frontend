/**
 * Created by dolphin on 28/6/2017.
 */

import React from 'react';
import {findBookById} from "../../service/bookService";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {User} from '../../components/user/User';


export default class Book extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    getBookInfo() {
        console.log("get book info");
        findBookById();
    }

    render() {

        function handleTouchTap() {
            alert('onTouchTap triggered on the title component');
        }

        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                width: 500,
                height: 450,
                overflowY: 'auto',
            },
        };

        console.log("bookname:" + this.props.bookname);

        const tilesData = [
            {
                img: 'http://jiangxiaoqiang.com/2016/09/24/eclipse-breakpoint-type/method-breakpoint.jpg',
                title: 'dd',
                author: 'jill111',
            }
        ];

        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        <AppBar
                            title="首页"
                            onTitleTouchTap={handleTouchTap}
                        />
                    </div>
                    <TextField
                        hintText="请输入书名"
                    />

                    <button onClick={() => this.getBookInfo()}>查询</button>

                    <div style={styles.root}>
                        <table>
                            <tbody>
                            <tr>
                                <td>书名：{this.props.book.name}</td>
                            </tr>
                            <tr>
                                <td>作者：{this.props.book.author}</td>
                            </tr>
                            <tr>
                                <td>出版社：{this.props.book.publisher}</td>
                            </tr>
                            <tr>
                                <td>ISBN：{this.props.book.isbn}</td>
                            </tr>
                            <tr>
                                <td>价格：{this.props.book.price}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

