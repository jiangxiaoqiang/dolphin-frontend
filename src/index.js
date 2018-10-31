import React from 'react';
import ReactDOM from "react-dom";
import store from "./store";
import routes from "./routes/routes";
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
            <Route path="/user/login" component={Login}/>
        </div>
    </BrowserRouter>
);
*/
