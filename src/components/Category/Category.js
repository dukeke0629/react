import React,{Component}from 'react';
import './category.css';
// import style from './category.module.css';
import './swiper.min.css';
class Column extends Component{
    render(){
        return(
            <>
                <div className="search_box">
                        <a href=" " className="back lf"> </a>
                        <a href="search.html" className="search lf">输入商品名称</a>
                </div>
                    <div className="mainss">
                        <div className="left">
                            <ul>
                                <li className="current">为你推荐</li>
                                <li>特卖专场</li>
                                <li>每日新品</li>
                                <li>每周热卖</li>
                                <li>个护化妆</li>
                                <li>精品美食</li>
                                <li>地标特产</li>
                                <li>时令鲜果</li>
                                <li>流行服饰</li>
                                <li>男女鞋靴</li>
                                <li>时尚箱包</li>
                                <li>营养保健</li>
                                <li>母婴用品</li>
                                <li>名酒名茶</li>
                                <li>家居日用</li>
                                <li>数码/家电</li>
                                <li>首饰奢品</li>
                                <li>品牌专场</li>
                            </ul>
                        </div>
                        <div className="right">
                            <div style={{display: 'block'}} className="right_content">
                                <div className="category">
                                    <p className="title">热门分类</p>
                                    <div className="show">
                                        <div className="product">
                                            <a className="link" href=" ">
                                                <p className="introduce">奶粉</p>
                                                <img src="images/22.png" alt=""/>
                                            </a>
                                        </div>
                                        <div className="product">
                                            <a className="link" href=" ">
                                                <p className="introduce">奶粉</p>
                                                <img src="images/22.png" alt=""/>
                                            </a>
                                        </div>
                                        <div className="product">
                                            <a className="link" href=" ">
                                                <p className="introduce">奶粉</p>
                                                <img src="images/22.png" alt=""/>
                                            </a>
                                        </div>
                                        <div className="product">
                                            <a className="link" href=" ">
                                                <p className="introduce">奶粉</p>
                                                <img src="images/22.png" alt=""/>
                                            </a>
                                        </div>
                                        <div className="product">
                                            <a className="link" href=" ">
                                                <p className="introduce">奶粉</p>
                                                <img src="images/22.png" alt=""/>
                                            </a>
                                        </div>
                                        <div className="product">
                                            <a className="link" href=" ">
                                                <p className="introduce">奶粉</p>
                                                <img src="images/22.png" alt=""/>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">每日特卖专场</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <p className="title">全球美食专场</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <p className="title">服装专场</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">每日新品</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">美妆洗护新品</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">美妆洗护新品</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">美妆洗护新品</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">美妆洗护新品</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">美妆洗护新品</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">美妆洗护新品</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">每周热卖</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">面部护理</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">品类热销排行</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">美食</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">美食热销排行</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <p className="title">粮油</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">大米</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <p className="title">生鲜类</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">生鲜食品</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <p className="title">澳门十月初五专场</p>
                                    <div className="show">
                                        <p className="title">NO DATA!!!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">地方特产</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">名优特产</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">时令鲜果</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">品牌热销排行</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">女装</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">连衣裙、连体衣</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <p className="title">男装</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">男装热销排行</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <p className="title">童装</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">上衣</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <p className="title">配饰</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">男士腰带</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">男鞋</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">精品男鞋</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <p className="title">女鞋</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">精品女鞋</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">精品箱包</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">箱包热销排行</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <p className="title">潮流女包</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">潮流女包</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">潮流女包</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">潮流女包</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">潮流女包</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <p className="title">精品男包</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">男士钱包</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">男士钱包</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">男士钱包</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">男士钱包</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">男士钱包</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">男士钱包</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">男士钱包</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">男士钱包</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <p className="title">功能箱包</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">旅行箱</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <p className="title">皮带</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">男士皮带</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">女士皮带</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">营养保健</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">男士保健</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">母婴用品</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">名酒名茶</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">精品洋酒</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">家居日用</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">家居清洁</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">家居清洁</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">家居清洁</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">家居清洁</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">家居清洁</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">家居清洁</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">家居清洁</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">家电</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">生活电器</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">生活电器</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">生活电器</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <p className="title">数码</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">移动电源</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">生活电器</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">生活电器</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">珠宝眼镜</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">饰品热销</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">饰品热销</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content">
                                <div className="category">
                                    <p className="title">品牌专场</p>
                                    <div className="show">
                                        <div className="product">
                                            <p className="introduce">whoo</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">whoo</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">whoo</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">whoo</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">whoo</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">whoo</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">whoo</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">whoo</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">Doir</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                        <div className="product">
                                            <p className="introduce">奶粉</p>
                                            <img src="images/22.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                </>
        )
    }
}
export default Column;