import React from 'react';
import ReactDOM from "react-dom";
import store from "./store";
import routes from "./routes/routes";
import {Provider} from "react-redux";

ReactDOM.render(
<<<<<<< HEAD
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root')
=======
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
>>>>>>> 8be9c725dfb0842087c5d97ccfd8264433a5c0ff
);
*/
