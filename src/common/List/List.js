import React from 'react';

import ReactSwipe from 'react-swipe'
import './List.css';
import './swiper.min.css';

const List = ({list,dataName}) => (
    
<div style={{display:'block'}} className="main">

        <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true,
        auto:2000 }}
        
        >
        <div className="swiper-slide"><a href=" "><img src="/images/1.jpg" alt=""/></a></div>
        <div className="swiper-slide"><a href=" "><img src="/images/2.jpg" alt=""/></a></div>
        <div className="swiper-slide"><a href=" "><img src="/images/3.jpg" alt=""/></a></div>
        <div className="swiper-slide"><a href=" "><img src="/images/4.jpg" alt=""/></a></div>
        <div className="swiper-slide"><a href=" "><img src="/images/5.jpg" alt=""/></a></div>
      </ReactSwipe>
        
        <div className="day">
            <a href=" " className="day_left lf">
                <img src="/images/jrqg.png" alt=""/>
            </a>
            <a href=" " className="day_right rf">
                <img src="/images/mrxp.png" alt=""/>
            </a>
        </div>
        <div className="content">
        <div className="product">
            <a className="bg_img" href=" "><img src="/images/a.png" alt=""/></a>
            <div className="look">
                <a href=" ">
                    <div className="lf"><img src="/images/look.png" alt=""/></div>
                    <div className="rf">
                        <p>面部护肤热销排行榜</p>
                        <p><span>点击查看</span>&gt;&gt;</p>
                    </div>
                </a>
            </div>
            <div className="show">
                <ul>
                    {
                        
                            list.map((item,index)=>(
                                <li key={index}>
                                <div className="lf">
                                    <a href=" ">
                                        <img src={item.src} alt=""/>
                                    </a>
                                </div>
                                <div className="rf">
                                    <p><a href=" ">面膜区</a></p>
                                    <a href=" " className="into">立即进入</a>
                                </div>
                            </li>
                        ))
                    }
                  
                </ul>
            </div>
        </div>
        <div className="product">
            <a className="bg_img" href=" "><img src="/images/d.png" alt=""/></a>
            <div className="look">
                <a href=" ">
                    <div className="lf"><img src="/images/look.png" alt=""/></div>
                    <div className="rf">
                        <p>洗护热销排行榜</p>
                        <p><span>点击查看</span>&gt;&gt;</p>
                    </div>
                </a>
            </div>
            <div className="show">
                <ul>
                {
                        
                        list.map((item,index)=>(
                            <li key={index}>
                            <div className="lf">
                                <a href=" ">
                                    <img src={item.src} alt=""/>
                                </a>
                            </div>
                            <div className="rf">
                                <p><a href=" ">面膜区</a></p>
                                <a href=" " className="into">立即进入</a>
                            </div>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
        <div className="product">
            <a className="bg_img" href=" "><img src="/images/b.png" alt=""/></a>
            <div className="look">
                <a href=" ">
                    <div className="lf"><img src="/images/look.png" alt=""/></div>
                    <div className="rf">

                        <p>水果热销排行榜</p>
                        <p><span>点击查看</span>&gt;&gt;</p>

                    </div>
                </a>
            </div>
            <div className="show">
                <ul>
                {
                        
                        list.map((item,index)=>(
                            <li key={index}>
                            <div className="lf">
                                <a href=" ">
                                    <img src={item.src} alt=""/>
                                </a>
                            </div>
                            <div className="rf">
                                <p><a href=" ">面膜区</a></p>
                                <a href=" " className="into">立即进入</a>
                            </div>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
        <div className="product">
            <a className="bg_img" href=" "><img src="/images/c.png" alt=""/></a>
            <div className="look">
                <a href=" ">
                    <div className="lf"><img src="/images/look.png" alt=""/></div>
                    <div className="rf">

                        <p>女装热销排行榜</p>
                        <p><span>点击查看</span>&gt;&gt;</p>

                    </div>
                </a>
            </div>
            <div className="show">
                <ul>
                    <li>
                        <div className="lf">
                            <a href=" ">
                                <img src="/images/aa.png" alt=""/>
                            </a>
                        </div>
                        <div className="rf">
                            <p><a href=" ">面膜区</a></p>
                            <a href=" " className="into">立即进入</a>
                        </div>
                    </li>
                    <li>
                        <div className="lf">
                            <a href=" ">
                                <img src="/images/aa.png" alt=""/>
                            </a>
                        </div>
                        <div className="rf">
                            <p><a href=" ">面膜区</a></p>
                            <a href=" " className="into">立即进入</a>
                        </div>
                    </li>
                    <li>
                        <div className="lf">
                            <a href=" ">
                                <img src="/images/aa.png" alt=""/>
                            </a>
                        </div>
                        <div className="rf">
                            <p><a href=" ">面膜区</a></p>
                            <a href=" " className="into">立即进入</a>
                        </div>
                    </li>
                    <li>
                        <div className="lf">
                            <a href=" ">
                                <img src="/images/aa.png" alt=""/>
                            </a>
                        </div>
                        <div className="rf">
                            <p><a href=" ">面膜区</a></p>
                            <a href=" " className="into">立即进入</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="hot_sale">
            <p className="hot_commodity">热销商品</p>
            <div className="hot_sale_show">
                <div className="hot_product">
                    <img src="/images/22.png" alt=""/>
                    <p className="introduce">德国进口 Knotenote 牛奶榛子巧克力威化饼干 10*29g</p>
                    <p className="price">优惠价：￥39.00</p>
                </div>
                <div className="hot_product">
                    <img src="/images/22.png" alt=""/>
                    <p className="introduce">德国进口 Knotenote 牛奶榛子巧克力威化饼干 10*29g</p>
                    <p className="price">优惠价：￥39.00</p>
                </div>
                <div className="hot_product">
                    <img src="/images/22.png" alt=""/>
                    <p className="introduce">德国进口 Knotenote 牛奶榛子巧克力威化饼干 10*29g</p>
                    <p className="price">优惠价：￥39.00</p>
                </div>
                <div className="hot_product">
                    <img src="/images/22.png" alt=""/>
                    <p className="introduce">德国进口 Knotenote 牛奶榛子巧克力威化饼干 10*29g</p>
                    <p className="price">优惠价：￥39.00</p>
                </div>
            </div>
        </div>
    </div>
    </div>
);
export default List