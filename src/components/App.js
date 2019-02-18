import React,{Component}from 'react';

import Home from '../components/Home/Home.js';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart.js';
import Category from '../components/Category/Category.js';
import MyCenter from '../components/MyCenter/MyCenter.js';
import Login from '../components/Login/Login.js';
import Reg from '../components/Reg/Reg.js';
import Auth from '../guard/Auth.js'
import Footer from '../common/Footer/Footer.js';
import Error from '../common/Error/Error.js';

import {Route,Redirect,Switch} from 'react-router-dom'
class App extends Component{
    componentWillReceiveProps(){
        let path = this.props.location.pathname;
        console.log(path)
    }
    render(){
        return(
            <>
            <Switch>
            <Route path='/Home' component={Home} />
            <Auth path='/MyCenter' component={MyCenter} />
            <Route path='/Login' component={Login} />
            <Route path='/Reg' component={Reg} />
            <Route path='/Category' component={Category} />
            <Route path='/ShoppingCart' component={ShoppingCart} />
            <Redirect exact from='/' to="Home"/>
            <Route  component={Error} />
            </Switch>
                {/* <Home/> */}
                {/* <MyCenter/> */}
                {/* <Login/> */}              
                {/* <Category/> */}
                {/* <ShoppingCart/> */}
                <Footer/>
                
            </>
        )
    }
}
export default App;