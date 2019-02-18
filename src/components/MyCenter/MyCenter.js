import React,{Component}from 'react';
import {Link} from 'react-router-dom'
import './MyCenter.css'
class MyCenter extends Component{
    
    render(){
        return(
            <>
                <div className="main-mycenter">
                    <div className="user_box">
                        <div className="user_info">
                            <Link to='/Login' className="vip_data">
                                <div className="head">
                                    <img src="/images/0.jpg" alt=""/>
                                </div>
                                <div className="vip_right">
                                    <p className="user_name">
                                    {this.props.data.username} <span className="open_vip">开通年卡会员</span>
                                    </p>
                                    <div className="tjr">
                                   
                                        <p>推荐人:</p>
                                        <p className="tjr_name">商家</p>
                                        <p  className="tjr_xg">修改</p>
                                    </div>
                                    <p className="vip_number">会员号:<span>133603473</span></p>
                                    <p className="right_icon"></p>
                                </div>
                            </Link>
                        </div>
                    
                        <div className="tjr_xg_tc">
                            <span className="tjr_sp1">修改推荐人</span>
                            <br/>
                            <label>请输入推荐人会员号</label>
                            <br/>
                            <input  className="txt" type="text" name="tjrName" />
                            <br/>
                            <p><span className="tjr_sp2">取消</span><span>确定</span></p>

                        </div>
                        
                        <div className="user_order">
                            <a className="dfk" href=" ">
                                <p>0</p>
                                待付款
                            </a>
                            <a className="dsh" href=" ">
                                <p>0</p>
                                待收货
                            </a>
                            <a className="dpj" href=" ">
                                <p>0</p>
                                待评价
                            </a>
                            <a className="tk" href=" ">
                                <p>0</p>
                                退款/售后
                            </a>
                        </div>
                    </div>
                    <div className="kt_img">
                        <img src="" alt=""/>
                    </div>
                    <div className="vip_rank">
                        <div className="vip_rank_title">
                            <a className="vip_rank_title_link" href=" ">
                                <div className="lf">金卡会员</div>
                                <div className="rf">会员等级</div>
                            </a>
                        </div>
                        <div className="vip_rank_content">
                            <a className="wdfs" href=" ">
                                <p>0</p>
                                我的粉丝
                            </a>
                            <a className="byzd" href=" ">
                                <p>0</p>
                                本月账单
                            </a>
                            <a className="jffd" href=" ">
                                <p>0</p>
                                本月积分返点
                            </a>
                        </div>
                    </div>
                    <div className="my_purse">
                        <div className="my_purse_title">
                            <a className="my_purse_title_link" href=" ">
                                <b></b>我的钱包
                            </a>
                        </div>
                        <div className="my_purse_content">
                            <a className="freeze" href=" ">
                                <p>0</p>
                                提现冻结
                            </a>
                            <a className="balance" href=" ">
                                <p>0</p>
                                余额
                            </a>
                            <a className="coupon" href=" ">
                                <p>0</p>
                                优惠券
                            </a>
                        </div>
                    </div>
                    <ul className="item_list">
                        <li className="item">
                            <a className="item_order_link" href=" ">
                                <div className="item_content">
                                    全部订单
                                    <span>查看</span>
                                </div>
                            </a>
                        </li>
                        <li className="item">
                            <a className="item_er_link" href=" ">
                                <div className="item_content">
                                    推广二维码
                                    <span>点击发送</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>



                
            </>
        )
    }
   
}
export default MyCenter;