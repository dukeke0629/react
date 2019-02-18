import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import {BrowserRouter,Route} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
// import Loading from './components/Loading/Loading.js'
// let root = {
//     bNav:true,
//     bFoot:true,
//     bLoading:false
// };
// window.rc_root=root
ReactDOM.render(
    <Provider store = {store}>
     {/* <Loading/> */}
        <BrowserRouter>           
            <Route component={App}  />
        </BrowserRouter>
    </Provider>   
    ,
    document.getElementById('root')
)