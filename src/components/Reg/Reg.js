import React,{Component}from 'react';
import '../Login/frameui.css';
import '../Login/index.css';
import '../Login/Login.css';
class Reg extends Component{
    render(){
        return(
            <>
               <div id="register-b">
		<nav className="j-nav navbar">
	        <div className="logo fl">
				<a href="user.html"> </a>
			</div>
			<span className="user-title">注册会员</span>
	    </nav>

		<div className="register-box">
			<form action="" className="am-form" id="doc-vld-msg">
				<fieldset>
				    <div className="am-form-group">
				      	<label  className="am-u-sm-2 j-form-label">
					    	<span className="registericon registericon-user"></span>
					  	</label>
				      	<input type="number" id="doc-vld-name-2-1"  data-validation-message="请输入手机号码" placeholder="手机号码" required/>
				      	<span className="input-group-btn">
		                    <button className="btn btn-default" type="button" id="TestGetCode"><span>点击获取</span><span className="hide">还剩<b id="timeout">60</b>秒</span></button>
		                </span>
				    </div>
				    <div className="am-form-group">
				      	<label  className="am-u-sm-2 j-form-label">
			    	  		<span className="registericon registericon-password"></span>
			    	  	</label>
				      	<input type="password" id="doc-vld-pwd-1" data-validation-message="请输入手机收到的短信验证码" placeholder="验证码" required/>
				    </div>
				    <button className="btn am-btn am-btn-secondary" type="submit">注 册</button>
				</fieldset>
			</form>
		</div>	
	</div>
            </>
        )
    }
}
export default Reg;