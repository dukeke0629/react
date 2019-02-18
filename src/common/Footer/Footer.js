import React from 'react';
import {NavLink} from 'react-router-dom'

import './Footer.css';
const Footer = (props) => (
    <footer>
    <NavLink to={{pathname:'/Home'}}>首页</NavLink>
    <NavLink to={{pathname:'/Category'}}>分类</NavLink>
    <NavLink to={{pathname:'/ShoppingCart'}}>购物车</NavLink>
    <NavLink to={{pathname:'/MyCenter'}}>我的</NavLink>
</footer>
);
export default Footer