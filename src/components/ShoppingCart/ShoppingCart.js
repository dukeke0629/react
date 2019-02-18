import React,{Component}from 'react';
import style from'./ShoppingCart.module.css'
class ShoppingCart extends Component{
    render(){
        return(
            <>
                <div className={style.top}>
                    <a href=" " className={style.back}> </a>
                    <span>购物车</span>
                    <a href=" " className={style.edit}>编辑</a>
                </div>
                <div className={style.mains}>
                    <p className={style.titles}>全选</p>
                    <div className={style.product}>
                        <div className={style.commodity_box}>
                            <div className={style.commodity}>
                                <div className={style.img}>
                                    <img src="/images/22.png" alt=""/>
                                </div>
                                <div className={style.detail}>
                                    <p className={style.jieshao}>德国Aptamil爱他美白金版奶粉1段（新包装）800g/罐-【1灌装】800g/罐</p>
                                    <p className={style.size}>【1灌装】800g/罐</p>
                                    <div className={style.price_num}>
                                        <div className={style.price}>
                                            ￥<span>228.53</span>
                                        </div>
                                        <div className={style.num}>
                                            <button type="button">-</button>
                                            <span>1</span>
                                            <button type="button">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.del}>删除</div>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.commodity_box}>
                            <div className={style.commodity}>
                                <div className={style.img}>
                                    <img src="/images/22.png" alt=""/>
                                </div>
                                <div className={style.detail}>
                                    <p className={style.jieshao}>德国Aptamil爱他美白金版奶粉1段（新包装）800g/罐-【1灌装】800g/罐</p>
                                    <p className={style.size}>【1灌装】800g/罐</p>
                                    <div className={style.price_num}>
                                        <div className={style.price}>
                                            ￥<span>228.53</span>
                                        </div>
                                        <div className={style.num}>
                                            <button type="button">-</button>
                                            <span>1</span>
                                            <button type="button">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.del}>删除</div>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.commodity_box}>
                            <div className={style.commodity}>
                                <div className={style.img}>
                                    <img src="/images/22.png" alt=""/>
                                </div>
                                <div className={style.detail}>
                                    <p className={style.jieshao}>德国Aptamil爱他美白金版奶粉1段（新包装）800g/罐-【1灌装】800g/罐</p>
                                    <p className={style.size}>【1灌装】800g/罐</p>
                                    <div className={style.price_num}>
                                        <div className={style.price}>
                                            ￥<span>228.53</span>
                                        </div>
                                        <div className={style.num}>
                                            <button type="button">-</button>
                                            <span>1</span>
                                            <button type="button">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.del}>删除</div>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.commodity_box}>
                            <div className={style.commodity}>
                                <div className={style.img}>
                                    <img src="/images/22.png" alt=""/>
                                </div>
                                <div className={style.detail}>
                                    <p className={style.jieshao}>德国Aptamil爱他美白金版奶粉1段（新包装）800g/罐-【1灌装】800g/罐</p>
                                    <p className={style.size}>【1灌装】800g/罐</p>
                                    <div className={style.price_num}>
                                        <div className={style.price}>
                                            ￥<span>228.53</span>
                                        </div>
                                        <div className={style.num}>
                                            <button type="button">-</button>
                                            <span>1</span>
                                            <button type="button">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.del}>删除</div>
                        </div>
                    </div>

                </div>
         
            </>
        )
    }
}
export default ShoppingCart;