<template>
    <div class="pate-chongzhi">
  <div class="view_account">
   <div class="nav_layout account_nav">
    <div class="com_nav white_nav">
     <div class="nav_content">
      <div class="nav_left">
       <div class="back_btn l_con"></div>
      </div>
      <div class="nav_middle">
       <span class="nav_title">我的账户</span>
      </div>
      <div class="nav_right">
       <span>帮助</span>
      </div>
     </div>
     <!---->
    </div>
   </div>
   <div class="account_info">
    <div class="vcoin_info">
     <span class="vc_num"> 0 </span>
     <p class="vc_des">墨币余额</p>
    </div>
    <div class="recharge_panel">
     <div class="charge_list">
      <div class="recharge_item">
       <div class="icon">
        <div class="comic_cover" data-src="https://img.manhua.weibo.com/product_cover/2019/11/15/_oHYPVDHi.png" lazy="loaded" style="background-image: url(&quot;https://img.manhua.weibo.com/product_cover/2019/11/15/_oHYPVDHi.png&quot;);"></div>
       </div>
       <div class="vcoin_price">
        <div class="button_header">
         <button type="button" class="comic_button" style="width: 85px; height: 37px; font-size: 16px;">￥10.00</button>
        </div>
       </div>
      </div>
      <div class="recharge_item">
       <div class="icon">
        <div class="comic_cover" data-src="https://img.manhua.weibo.com/product_cover/2019/11/15/_UVCbhAEt.png" lazy="loaded" style="background-image: url(&quot;https://img.manhua.weibo.com/product_cover/2019/11/15/_UVCbhAEt.png&quot;);"></div>
       </div>
       <div class="vcoin_price">
        <div class="button_header">
         <button type="button" class="comic_button" style="width: 85px; height: 37px; font-size: 16px;">￥5.00</button>
        </div>
       </div>
      </div>
      <div class="recharge_item">
       <div class="icon">
        <div class="comic_cover" data-src="https://img.manhua.weibo.com/product_cover/2019/11/15/_3t5NsMUi.png" lazy="loaded" style="background-image: url(&quot;https://img.manhua.weibo.com/product_cover/2019/11/15/_3t5NsMUi.png&quot;);"></div>
       </div>
       <div class="vcoin_price">
        <div class="button_header">
         <button type="button" class="comic_button" style="width: 85px; height: 37px; font-size: 16px;">￥20.00</button>
        </div>
       </div>
      </div>
      <div class="recharge_item">
       <div class="icon">
        <div class="comic_cover" data-src="https://img.manhua.weibo.com/product_cover/2019/11/15/_PeIyhDiW.png" lazy="loaded" style="background-image: url(&quot;https://img.manhua.weibo.com/product_cover/2019/11/15/_PeIyhDiW.png&quot;);"></div>
       </div>
       <div class="vcoin_price">
        <div class="button_header">
         <button type="button" class="comic_button" style="width: 85px; height: 37px; font-size: 16px;">￥30.00</button>
        </div>
       </div>
      </div>
      <div class="recharge_item">
       <div class="icon">
        <div class="comic_cover" data-src="https://img.manhua.weibo.com/product_cover/2019/11/15/_xN5gxKCL.png" lazy="loaded" style="background-image: url(&quot;https://img.manhua.weibo.com/product_cover/2019/11/15/_xN5gxKCL.png&quot;);"></div>
       </div>
       <div class="vcoin_price">
        <div class="button_header">
         <button type="button" class="comic_button" style="width: 85px; height: 37px; font-size: 16px;">￥50.00</button>
        </div>
       </div>
      </div>
      <div class="recharge_item">
       <div class="icon">
        <div class="comic_cover" data-src="https://img.manhua.weibo.com/product_cover/2019/11/15/_dpTORmpV.png" lazy="loaded" style="background-image: url(&quot;https://img.manhua.weibo.com/product_cover/2019/11/15/_dpTORmpV.png&quot;);"></div>
       </div>
       <div class="vcoin_price">
        <div class="button_header">
         <button type="button" class="comic_button" style="width: 85px; height: 37px; font-size: 16px;">￥100.00</button>
        </div>
       </div>
      </div>
     </div>
     <h3 class="des_title">墨币记录</h3>
     <div class="charge_des">
      <p class="charge_item"> 充值说明： </p>
      <p class="charge_item"> 1、您在H5端充值的墨币，无法在iOS端APP内使用。 </p>
      <p class="charge_item"> 2、充值未完成时，请不要切换微博动漫账号或退出页面，否则可能出现充值未到账的情况。 </p>
      <p class="charge_item"> 3、充值墨币可能存在延迟情况，如24小时内墨币未到账，可在意见反馈中与我们联系。 </p>
     </div>
    </div>
   </div>
   <div class="buy_bg" style="display: none;">
    <div class="buy_panel">
     <div class="panel_top">
      <p class="buy_title"> 请选择支付方式 </p>
      <label for="wxpay" class="buy_cate wxpay"><img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/wechat.241045da.png" class="cate_icon" /><span class="cate_des">微信支付</span><input type="radio" id="wxpay" name="buy_cate" class="cate_btn" value="wxpay" /></label>
      <label for="alipay" class="buy_cate alipay"><img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/alipay.503ce74e.png" class="cate_icon" /><span class="cate_des">支付宝支付</span><input type="radio" id="alipay" name="buy_cate" class="cate_btn" value="alipay" /></label>
     </div>
     <div class="panel_bottom">
      <p class="vocin_num"> 购买: <span>0墨币</span></p>
      <p class="vcoin_price"> &yen; <span>0</span></p>
     </div>
     <div class="buy_btn">
      <div class="button_header">
       <button type="button" class="comic_button" style="width: 15.4375rem; height: 2.75rem; font-size: 0.875rem;">确认支付</button>
      </div>
     </div>
    </div>
   </div>
   <div class="pay_back" style="display: none;">
    <!---->
    <!---->
    <!---->
   </div>
   <div id="alipayFrom" style="display: none;"></div>
  </div>
    </div>
</template>
<script>
export default {
  name: 'Chongzhi'
}
</script>
<style lang="scss">
.pate-chongzhi{
    height: 100%;
}
.view_account {
    background: #fefefe
}

.view_account .account_nav .com_nav {
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%
}

.view_account .account_nav.white_nav .back_btn {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAXNSR0IArs4c6QAAAmFJREFUeAHt3FFKw0AUBVDxo116d+SWsow6A+qH+NLUMnDJO4GAdDB9c+7FBgx9e3MQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwHqB+/1+GedtnNvXOX++rH9n7xAnMIK/jvNjnL+PW9ywBlorMBpQlWGWY1v77q4eJfCgDAoRldbiYQ6UYRbCR8biHCIuf7AM857CTWVEYguHeKIM14VjuHSCgDIkpBAygzKEBJEwhjIkpBAygzKEBJEwhjIkpBAygzKEBJEwhjIkpBAygzKEBJEwhjIkpBAygzKEBJEwhjIkpBAywyjDfNLpr4dbxss/x1z3v4mQzJaOMYKej7rtHcqwNIGwi48mbDttUIYir/fidS8TOJfA+OvgI+Nckb62m1EIN5WvEZ7vt0cp9p6c/r7FcD9xvujrHSlFbdN2RSnaRl9vXClqm7YrStE2+nrjSlHbtF1RirbR1xtXitqm7YpStI2+3rhS1DZtV5SibfT1xpWitmm78kQpfB1Al5YcLIUvDOlSiLnPA6XYOnnY6+NSKETHluz8pfCR0bEQc8+jFL64tGv49k2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwP8FPgGaryBm0wQrqAAAAABJRU5ErkJggg==)!important;
    background-size: cover
}

.view_account .account_nav .nav_right {
    margin-right: 8px;
    font-size: 14px
}
.nav_layout {
    width: 100%;
    height: 44px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    z-index: 1000;
}

.nav_layout .com_nav {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #fff
}
.com_nav,.com_nav .nav_content,.gray_nav,.gray_nav .nav_content,.white_nav,.white_nav .nav_content {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}
.com_nav .nav_content,.gray_nav .nav_content,.white_nav .nav_content {
    flex-direction: row;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    z-index: 1
}
.nav_left {
    -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left
}

.l_con,.nav_left {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.l_con {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 44px;
    height: 44px
}

.l_con.back_btn {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAXNSR0IArs4c6QAAAv5JREFUeAHt3EGO0zAYgNEpGtE79EbdDTfgAt3DirJj3wtwA5a9UcUVyqbYTKpJM44dpG76+yEhEjeN5OdP0CGeeXryiwABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAncQWN3hHqFvsd/vP55Op++r1epznujlcvm52Wy+pfE/ESf+HHFS95rTbrdbpxh+pfttUwjX235JY/n463Ug0p8fIk3mnnPJMZzP538xTO97/dtiOh7hXBCFVazFULg81JAgJsu5JIb8OWLytjCnghgt5ZIY0uXH/KFy9LZQh77KGJZzaQzr9frT4XA4h6pgNBlBJAwxvBXRfRBieIshH3UdhBhuY+g6CDG8j6HbIMRQjqHLIMQwH0N3QYihHkNXQYihHUM3QYhhWQxdBCGG5TGED0IM/xdDvjrsw62802luP8OI6Rj92cRorosOwwaRt70lgW1FQQwFnLBBNHY1iaEQQx4KG8TMfA03BMIG0djVtM2fL/KHzoZPdy+HDWLY1XSsrKgoCjihH3/7srOw4o2h0EHkuYuiUcDk5fBBiGKy4o3TLoIQRaOC0cvdBCGK0apXDrsKQhSVEoaXugtCFPUougxCFPNRdBuEKMpRdB2EKN5H0X0QoriNQhCDh//RfIUI+3Drtvv2Wf6O7rx7Kl3ZfCCWd2O17/iYVwhitG5Loxh2Y43eGedQEJO1XBJFYzfW5I6PdSqIwnotiaLwthBDgphZxloUjd1YM3d8jGFBVNYpR5F2Xr2kS36kfyZ+59/5OPLPmKpweIkAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQLLBf4CxpJVWJk5/7sAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-size: 100% 100%
}
.nav_middle {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    line-height: 44px;
}

.nav_middle .nav_title {
    font-size: 18px
}

.nav_right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-width: 44px;
    height: 44px
}

.nav_right div {
    -ms-flex-negative: 0;
    flex-shrink: 0
}
.view_account .vcoin_info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 226px;
    color: #fff;
    background-image: url(~@/assets/icon/6.png);
    background-size: cover;
}

.view_account .vcoin_info .vc_num {
    margin-top: 100px;
    line-height: 48px;
    font-size: 48px;
    text-align: center;
    color: #fff
}

.view_account .vcoin_info .vc_des {
    line-height: 24px;
    font-size: 14px;
    text-align: center
}
.view_account .recharge_panel {
    margin-top: -36px;
    padding-top: 26px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: #fefefe
}

.view_account .recharge_panel .charge_list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-bottom: -19px;
    padding-left: 8px
}

.view_account .recharge_panel .charge_list .recharge_item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-right: 8px;
    margin-bottom: 19px;
    width: 114px;
    height: 212px;
    border-radius: 4px;
    background: #fff;
    -webkit-box-shadow: rgba(0,0,0,.2) 0 1px 3px 0;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
    overflow: hidden
}

.view_account .recharge_panel .charge_list .recharge_item .icon {
    width: 114px;
    height: 143px
}

.view_account .recharge_panel .charge_list .recharge_item .icon img {
    width: 100%;
    height: 100%
}

.view_account .recharge_panel .charge_list .recharge_item .vcoin_num {
    display: none;
    margin-top: 8px;
    line-height: 22px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    color: #fb544c
}

.view_account .recharge_panel .charge_list .recharge_item .vcoin_num .num {
    font-size: 22px
}

.view_account .recharge_panel .charge_list .recharge_item .vcoin_num .des {
    font-size: 10px
}

.view_account .recharge_panel .charge_list .recharge_item .vcoin_price {
    margin-bottom: 12px
}

.view_account .recharge_panel .charge_list .recharge_item .vcoin_price button {
    padding: 0
}

.view_account .recharge_panel .des_title {
    margin-top: 16px;
    margin-bottom: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 14px;
    color: #634fa4
}

.view_account .recharge_panel .charge_des {
    padding: 0 16px
}

.view_account .recharge_panel .charge_des p {
    line-height: 24px;
    font-size: 14px;
    color: #666
}
button {
    display: block;
    margin: 0 auto;
    outline: none;
    border: none;
    text-align: center;
    border-radius: 4px;
    color: #fff;
    white-space: nowrap;
    background: #f75d79
}
</style>
