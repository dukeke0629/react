import React,{Component}from 'react';
import {Link} from 'react-router-dom'
import './Login.css';
import './frameui.css';
import './index.css';
import ToDoList from '../ToDoList/ToDoList'
class Login extends Component{
    render(){
        return(
            <>
            <div id="register-b">
                <nav className="j-nav navbar">
                    <div className="logo fl">
                        <a href=" "> </a>
                    </div>
                    <span className="user-title">登录</span>
                    <div className="registerBtn">
                        <Link to="/Reg" href="register.html">注册</Link>
                    </div>
                </nav>
                <div className="register-box">
                    <form action="" className="am-form" id="doc-vld-msg">
                        <fieldset>
                            <div className="am-form-group">
                                <label className="am-u-sm-2 j-form-label">
                                    <span className="registericon registericon-user"></span>
                                </label>
                                <input type="text" id="doc-vld-name-2-1" placeholder="用户名/邮箱" data-validation-message="请输入用户名或登录邮箱" required/>
                            </div>

                            <div className="am-form-group">
                                <label  className="am-u-sm-2 j-form-label">
                                    <span className="registericon registericon-password"></span>
                                </label>
                                <input type="password" id="doc-vld-pwd-1" data-validation-message="请输入密码" placeholder="请输入密码" required/>
                            </div>
                            <button className="btn am-btn am-btn-secondary" type="submit">登 录</button>
                        </fieldset>
                    </form>
                    <div className="text-right">
                        <a href="/login/forgetps" className="m-login-link">忘记密码？</a>
                    </div>	
                </div>
            </div>
            <ToDoList/>
            </>
        )
    }
}
export default Login;