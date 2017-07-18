/**
 * Created by dolphin on 28/6/2017.
 */

import React from 'react';
import {findBookById} from "../../service/bookService";
import {getBooksByName} from "../../service/bookService";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {User} from '../../components/user/User';
import Utils from "../../common/Utils";

export default class Book extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    getBookInfo() {
        //findBookById();
        const userInput = document.getElementById("userInput");
        if (userInput.value.length > 0) {
            getBooksByName(userInput.value);
        }
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
        const books = this.props.books;
        let arr = [];
        for(let i in books){
            arr.push(books[i]);
        }
        const tilesData = arr;
        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        <AppBar
                            title="首页"
                            onTitleTouchTap={handleTouchTap}
                        />
                    </div>
                    <TextField id="userInput"
                               hintText="请输入书名"

                    />

                    <button onClick={() => this.getBookInfo()}>查询</button>

                    <div style={styles.root}>
                        <GridList
                            cellHeight={180}
                            style={styles.gridList}
                        >
                            {tilesData.map((tile) => (
                                <GridTile
                                    key={tile.id}
                                    title={tile.name}
                                    subtitle={<span>by <b>{tile.author}</b></span>}
                                    actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                                >
                                    <img src={tile.img}/>
                                </GridTile>
                            ))}
                        </GridList>
                    </div>


                </div>
            </MuiThemeProvider>
        )
    }
}

